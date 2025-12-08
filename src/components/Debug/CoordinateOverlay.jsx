import React, { useState, useEffect } from 'react';

export default function CoordinateOverlay() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleKeyDown = (e) => {
            if (e.key === 'g' || e.key === 'G') {
                setIsVisible(prev => !prev);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isVisible) return null;

    const centerX = window.innerWidth / 2;
    const relativeX = Math.round(mousePos.x - centerX);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
        }}>
            {/* Grid Lines */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
          linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: '100px 100px',
            }} />

            {/* Center Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'rgba(255, 0, 0, 0.5)',
            }} />

            {/* Info Box */}
            <div style={{
                position: 'fixed',
                top: 20,
                right: 20,
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ffff',
                padding: '10px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '14px',
                border: '1px solid #00ffff',
            }}>
                <div>Mouse X: {mousePos.x}</div>
                <div>Mouse Y: {mousePos.y}</div>
                <div style={{ color: '#ff00ff', marginTop: '5px' }}>
                    Center Offset X: {relativeX}
                </div>
                <div style={{ fontSize: '10px', color: '#888', marginTop: '5px' }}>
                    Press 'G' to toggle grid
                </div>
            </div>
        </div>
    );
}
