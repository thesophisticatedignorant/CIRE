import React, { useState } from 'react';

export default function NewsletterPopup({ onClose }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:3000/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    source: 'cire-join-network'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    if (onClose) onClose();
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                width: '400px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    color: '#fff',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                    fontWeight: '300',
                    textAlign: 'center'
                }}>
                    JOIN NETWORK 🤝
                </h2>

                <p style={{
                    color: '#888',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontSize: '0.9rem'
                }}>
                    Connect to the CIRE network for updates and access.
                </p>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', color: '#4ade80', padding: '1rem' }}>
                        Successfully joined the network.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#333',
                                border: '1px solid #444',
                                color: '#fff',
                                borderRadius: '4px',
                                marginBottom: '1rem',
                                fontSize: '1rem'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#fff',
                                color: '#000',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: status === 'submitting' ? 'wait' : 'pointer',
                                opacity: status === 'submitting' ? 0.7 : 1
                            }}
                        >
                            {status === 'submitting' ? 'CONNECTING...' : 'CONNECT'}
                        </button>
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem' }}>
                                Connection failed. Please try again.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
