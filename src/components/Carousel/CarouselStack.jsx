import React from 'react';
import Carousel from './Carousel.jsx';

export default function CarouselStack() {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 0
        }}>
            <Carousel direction="left" />
            <Carousel direction="right" />
        </div>
    );
}
