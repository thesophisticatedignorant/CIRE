import React from 'react';
import '../../styles.css';

export default function Carousel({ direction = 'left' }) {
    // Duplicate items to create seamless loop
    const items = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        title: `Item ${i + 1}`,
        color: `hsl(0, 0%, ${i * 6}%)`,
    }));

    const allItems = [...items, ...items]; // Duplicate for infinite effect

    return (
        <div className="carousel-container">
            <div className={`carousel-track ${direction === 'right' ? 'carousel-track-reverse' : ''}`}>
                {allItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="carousel-item" style={{ backgroundColor: item.color }}>
                        <span className="carousel-item-title">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
