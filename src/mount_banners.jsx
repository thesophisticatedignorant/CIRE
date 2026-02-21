import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import ExtrudedLogo from './components/3D/ExtrudedLogo';

function BannerScene({ src }) {
    return (
        <Canvas camera={{ position: [0, 0, 32], fov: 35 }} style={{ background: 'transparent', filter: 'drop-shadow(0px 15px 10px rgba(0,0,0,0.6))' }} shadows>
            <ambientLight intensity={0.6} />
            <spotLight
                position={[10, 15, 20]}
                angle={1.0} // Widened to prevent shadow culling
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={[2048, 2048]} // Increased resolution
                shadow-bias={-0.0001}
            />
            <ExtrudedLogo src={src} />
        </Canvas>
    );
}

export function mountBanners() {
    const targets = document.querySelectorAll('.banner-3d-target');

    targets.forEach((target) => {
        if (target.dataset.mounted === 'true') return;

        // Ensure the element is in the DOM
        if (!target.isConnected) return;

        const src = target.dataset.src;
        if (src) {
            try {
                const root = ReactDOM.createRoot(target);
                root.render(
                    <React.StrictMode>
                        <BannerScene src={src} />
                    </React.StrictMode>
                );
                target.dataset.mounted = 'true';
            } catch (e) {
                console.error("Failed to mount 3D banner:", e);
            }
        }
    });
}

// Observe DOM for changes to ensure we catch dynamically shown/created popups
const observer = new MutationObserver((mutations) => {
    // Simple debounce or just run it? The check is cheap.
    mountBanners();
});

// Start observing
observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

// Initial run
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountBanners);
} else {
    mountBanners();
}
