import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Requires: npm install react-draggable

const GuestbookPopup = ({ onClose }) => {
    return (
        <Draggable handle=".window-header">
            <div
                style={{
                    position: 'fixed',
                    top: '100px',
                    left: '100px',
                    width: '450px',
                    height: '600px',
                    backgroundColor: '#000',
                    border: '1px solid #333',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}
                className="guestbook-window"
            >
                {/* Header / Handle */}
                <div
                    className="window-header"
                    style={{
                        padding: '10px',
                        backgroundColor: '#111',
                        borderBottom: '1px solid #333',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'grab'
                    }}
                >
                    <span style={{ color: '#fff', fontSize: '12px', letterSpacing: '1px', fontWeight: 'bold' }}>HERON PRESTON GUESTBOOK</span>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#666',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* Content / Iframe */}
                <div style={{ flex: 1, position: 'relative' }}>
                    <iframe
                        src="http://localhost:5186"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            backgroundColor: '#000'
                        }}
                        title="Guestbook"
                    />
                    {/* Overlay to prevent iframe capturing mouse events while dragging could be added if needed */}
                </div>
            </div>
        </Draggable>
    );
};

export default GuestbookPopup;
