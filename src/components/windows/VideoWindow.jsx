export default function VideoWindow() {
    return (
        <div className="video-window" style={{ width: '300px', height: '300px' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => console.error("Video error:", e)}
                onLoadedData={() => console.log("Video loaded successfully")}
            >
                <source src="/transcendence of man.mp4" type="video/mp4" />

                Your browser does not support the video tag.
            </video>
        </div>
    );
}
