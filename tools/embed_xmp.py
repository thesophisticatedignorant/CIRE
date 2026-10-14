#!/usr/bin/env python3
"""Stamp the copyright into the image files themselves, without re-encoding a pixel.

seo_pages.cjs writes dist/.image-scope.json (path, title, description per in-scope photo).
For each file under public/ this inserts an XMP packet naming CIRE Conglomerate as creator
and rights holder, pointing at the licensing page:

  WebP  simple VP8 / VP8L files become extended (VP8X, XMP flag set), then an "XMP " chunk
  PNG   an iTXt chunk, keyword XML:com.adobe.xmp, before IEND
  JPEG  an APP1 XMP segment after SOI

Idempotent: a file whose XMP already says "CIRE Conglomerate" is skipped. Every file is
decoded before and after and the pixels must match; on any failure the original bytes are
put back. Run from the repo root:  python3 tools/embed_xmp.py [scope.json]
"""
import io
import json
import struct
import sys
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SCOPE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "dist" / ".image-scope.json"
MARK = "CIRE Conglomerate"
LICENSING = "https://cireconglomerate.com/licensing"
XMP_NS_APP1 = b"http://ns.adobe.com/xap/1.0/\x00"


def packet(title, description):
    e = escape
    return (
        '<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n'
        '<x:xmpmeta xmlns:x="adobe:ns:meta/">\n'
        ' <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n'
        '  <rdf:Description rdf:about=""\n'
        '    xmlns:dc="http://purl.org/dc/elements/1.1/"\n'
        '    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"\n'
        '    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"\n'
        '    xmlns:plus="http://ns.useplus.org/ldf/xmp/1.0/"\n'
        f'    photoshop:Credit="{MARK}"\n'
        '    xmpRights:Marked="True">\n'
        f'   <dc:creator><rdf:Seq><rdf:li>{MARK}</rdf:li></rdf:Seq></dc:creator>\n'
        f'   <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">© 2026 {MARK}</rdf:li></rdf:Alt></dc:rights>\n'
        f'   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">{e(title)}</rdf:li></rdf:Alt></dc:title>\n'
        f'   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">{e(description)}</rdf:li></rdf:Alt></dc:description>\n'
        f'   <xmpRights:WebStatement>{LICENSING}</xmpRights:WebStatement>\n'
        '   <plus:Licensor><rdf:Seq><rdf:li rdf:parseType="Resource">\n'
        f'    <plus:LicensorURL>{LICENSING}</plus:LicensorURL>\n'
        '   </rdf:li></rdf:Seq></plus:Licensor>\n'
        '  </rdf:Description>\n'
        ' </rdf:RDF>\n'
        '</x:xmpmeta>\n'
        '<?xpacket end="w"?>'
    ).encode("utf-8")


def has_mark(data):
    """True if the file already carries an XMP block that names us."""
    i = data.find(b"<x:xmpmeta")
    return i != -1 and MARK.encode() in data[i:]


# ---- WebP ----
def webp_chunks(data):
    chunks, pos = [], 12
    while pos + 8 <= len(data):
        fourcc, size = data[pos:pos + 4], struct.unpack("<I", data[pos + 4:pos + 8])[0]
        chunks.append((fourcc, data[pos + 8:pos + 8 + size]))
        pos += 8 + size + (size & 1)
    return chunks


def webp_chunk(fourcc, payload):
    return fourcc + struct.pack("<I", len(payload)) + payload + (b"\0" if len(payload) & 1 else b"")


def embed_webp(data, xmp):
    if data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        raise ValueError("not a RIFF/WEBP file")
    chunks = [c for c in webp_chunks(data) if c[0] != b"XMP "]
    first = chunks[0]
    if first[0] == b"VP8X":
        flags = first[1][0] | 0x04
        vp8x = bytes([flags]) + first[1][1:]
        chunks[0] = (b"VP8X", vp8x)
    elif first[0] == b"VP8 ":
        p = first[1]
        w, h = struct.unpack("<HH", p[6:10])
        w, h = w & 0x3FFF, h & 0x3FFF
        chunks.insert(0, (b"VP8X", bytes([0x04]) + b"\0\0\0" + (w - 1).to_bytes(3, "little") + (h - 1).to_bytes(3, "little")))
    elif first[0] == b"VP8L":
        p = first[1]
        bits = struct.unpack("<I", p[1:5])[0]
        w, h, alpha = (bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1, (bits >> 28) & 1
        chunks.insert(0, (b"VP8X", bytes([0x04 | (0x10 if alpha else 0)]) + b"\0\0\0" + (w - 1).to_bytes(3, "little") + (h - 1).to_bytes(3, "little")))
    else:
        raise ValueError(f"unexpected first chunk {first[0]!r}")
    chunks.append((b"XMP ", xmp))
    body = b"WEBP" + b"".join(webp_chunk(f, p) for f, p in chunks)
    return b"RIFF" + struct.pack("<I", len(body)) + body


# ---- PNG ----
def embed_png(data, xmp):
    import zlib
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("not a PNG")
    payload = b"XML:com.adobe.xmp\0\0\0\0\0" + xmp
    chunk = struct.pack(">I", len(payload)) + b"iTXt" + payload
    chunk += struct.pack(">I", zlib.crc32(b"iTXt" + payload) & 0xFFFFFFFF)
    iend = data.rfind(b"IEND") - 4
    return data[:iend] + chunk + data[iend:]


# ---- JPEG ----
def embed_jpeg(data, xmp):
    if data[:2] != b"\xff\xd8":
        raise ValueError("not a JPEG")
    payload = XMP_NS_APP1 + xmp
    if len(payload) + 2 > 0xFFFF:
        raise ValueError("XMP too large for one APP1 segment")
    return data[:2] + b"\xff\xe1" + struct.pack(">H", len(payload) + 2) + payload + data[2:]


EMBED = {".webp": embed_webp, ".png": embed_png, ".jpg": embed_jpeg, ".jpeg": embed_jpeg}


def pixels(data):
    img = Image.open(io.BytesIO(data))
    img.load()
    return img.size, img.convert("RGBA").tobytes()


def process(path, title, description):
    original = path.read_bytes()
    if has_mark(original):
        return "skipped", 0
    try:
        before = pixels(original)
        out = EMBED[path.suffix.lower()](original, packet(title, description))
        path.write_bytes(out)
        after = pixels(path.read_bytes())
        assert after == before, "pixels or size changed"
        info = Image.open(path).info
        xmp = info.get("xmp") or info.get("XML:com.adobe.xmp") or b""
        if isinstance(xmp, bytes):
            xmp = xmp.decode("utf-8", "replace")
        assert MARK in xmp, "XMP not readable back through Pillow"
        return "tagged", len(out) - len(original)
    except Exception as err:
        path.write_bytes(original)
        raise RuntimeError(f"{path}: {err} (original restored)")


def main():
    scope = json.loads(SCOPE.read_text(encoding="utf-8"))
    tagged = skipped = growth = 0
    failures = []
    seen = set()
    for item in scope:
        if item["path"] in seen:
            continue
        seen.add(item["path"])
        try:
            status, grew = process(PUBLIC / item["path"], item["title"], item["description"])
        except Exception as err:
            failures.append(str(err))
            continue
        if status == "tagged":
            tagged += 1
            growth += grew
        else:
            skipped += 1
    print(f"embed_xmp: tagged {tagged}, skipped {skipped}, failed {len(failures)}, byte growth {growth}")
    for f in failures:
        print("  FAILED", f)
    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
