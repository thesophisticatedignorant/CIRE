export default function FileViewerWindow({ fileName, filePath }) {
    const fileExtension = fileName.split('.').pop().toLowerCase();

    // Determine file type and render accordingly
    const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(fileExtension);
    const isVideo = ['mp4', 'webm', 'mov'].includes(fileExtension);
    const isDocument = ['rtf', 'pdf', 'txt'].includes(fileExtension);

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
