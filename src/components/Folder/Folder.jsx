import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function Folder({ x, y, label, style, onClick, color = "#007aff", isDraggable = true }) {
    const nodeRef = useRef(null);
    const dragStartPos = useRef({ x: 0, y: 0 });

    const handleStart = (e, data) => {
        dragStartPos.current = { x: data.x, y: data.y };
    };

    const handleStop = (e, data) => {
        const dx = Math.abs(data.x - dragStartPos.current.x);
        const dy = Math.abs(data.y - dragStartPos.current.y);
        if (dx < 5 && dy < 5) {
            if (onClick) onClick();
        }
    };

    const content = (
        <div
            ref={isDraggable ? nodeRef : null}
            style={{
                position: isDraggable ? 'absolute' : 'relative',
                left: isDraggable ? x : undefined,
                top: isDraggable ? y : undefined,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                width: '80px',
                textAlign: 'center',
                zIndex: isDraggable ? 1 : undefined,
                ...style
            }}
            onClick={!isDraggable ? onClick : undefined}
        >
            <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill={color === "red" ? "#ff3b30" : color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
            </svg>
            {label && (
                <span style={{
                    marginTop: '4px',
                    color: isDraggable ? 'white' : 'black', // Dark text inside windows? Or keep white if background is dark?
                    // Let's assume white for desktop (draggable) and black for finder (window) unless window bg is dark.
                    // Actually, window bg is #2b2b2b (dark), so white text is good.
                    textShadow: isDraggable ? '0 1px 2px rgba(0,0,0,0.8)' : 'none',
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    {label}
                </span>
            )}
        </div>
    );

    if (isDraggable) {
        return (
            <Draggable
                nodeRef={nodeRef}
                onStart={handleStart}
                onStop={handleStop}
            >
                {content}
            </Draggable>
        );
    }

    return content;
}
