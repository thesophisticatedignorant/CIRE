import { useState, useEffect, useRef } from 'react';

export function useDraggable({
    x = 0,
    y = 0,
    onDragStop,
    handle,
    cancel,
    disabled = false
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [initialPos, setInitialPos] = useState({ x, y });
    const [currentPos, setCurrentPos] = useState({ x, y });

    // Sync with props when not dragging
    useEffect(() => {
        if (!isDragging) {
            setCurrentPos({ x, y });
        }
    }, [x, y, isDragging]);

    const handleMouseDown = (e) => {
        if (disabled) return;

        // Check handle: if specified, target must be inside handle
        if (handle && !e.target.closest(handle)) return;

        // Check cancel: if specified, target must NOT be inside cancel
        if (cancel && e.target.closest(cancel)) return;

        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
        setInitialPos(currentPos);
        // Prevent default to stop text selection, but be careful with inputs (not an issue here)
        e.preventDefault();
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e) => {
            const dx = e.clientX - dragStart.x;
            const dy = e.clientY - dragStart.y;
            setCurrentPos({
                x: initialPos.x + dx,
                y: initialPos.y + dy
            });
        };

        const handleMouseUp = (e) => {
            setIsDragging(false);
            if (onDragStop) {
                // Mimic react-draggable signature: (e, data) where data has x, y
                const dx = e.clientX - dragStart.x;
                const dy = e.clientY - dragStart.y;
                onDragStop(e, { x: initialPos.x + dx, y: initialPos.y + dy });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart, initialPos, onDragStop]);

    return {
        position: currentPos,
        handleMouseDown,
        isDragging
    };
}
