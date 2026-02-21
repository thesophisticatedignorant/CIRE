import { useState, useEffect } from 'react';

export default function FileViewerWindow({ fileName, filePath }) {
    const fileExtension = fileName.split('.').pop().toLowerCase();
    const [rfdContent, setRfdContent] = useState('');

    // Determine file type and render accordingly
    const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(fileExtension);
    const isVideo = ['mp4', 'webm', 'mov'].includes(fileExtension);
    const isRfd = fileExtension === 'rfd';
    const isDocument = ['rtf', 'pdf', 'txt'].includes(fileExtension);

    // Fetch .rfd file content
    useEffect(() => {
        if (isRfd) {
            fetch(filePath)
                .then(response => response.text())
                .then(text => {
                    // Files now contain full HTML, no conversion needed
                    setRfdContent(text);
                })
                .catch(err => {
                    console.error('Error loading .rfd file:', err);
                    setRfdContent('<p>Error loading file content.</p>');
                });
        }
    }, [isRfd, filePath]);

    return (
        <div className="file-viewer-window" style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {isImage && (
                <img
                    src={filePath}
                    alt={fileName}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        userSelect: 'none',
                        pointerEvents: 'none'
                    }}
                />
            )}
            {isVideo && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                >
                    <source src={filePath} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            )}
            {isRfd && (
                <div style={{
                    padding: '2rem',
                    overflow: 'auto',
                    height: '100%',
                    width: '100%',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    lineHeight: '1.6',
                    color: '#e0e0e0'
                }}>
                    <style>{`
                        .file-viewer-window b,
                        .file-viewer-window strong {
                            font-weight: 700 !important;
                        }
                    `}</style>
                    <div
                        dangerouslySetInnerHTML={{ __html: rfdContent }}
                        style={{ fontSize: '1rem' }}
                    />
                </div>
            )}
            {isDocument && (
                <div style={{ padding: '1rem', overflow: 'auto', height: '100%' }}>
                    <p style={{ fontSize: '0.9rem' }}>
                        Click to download: <a href={filePath} download={fileName} style={{ color: 'var(--accent-color)' }}>{fileName}</a>
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>
                        Document preview not available. Click the link above to download and view.
                    </p>
                </div>
            )}
        </div>
    );
}
