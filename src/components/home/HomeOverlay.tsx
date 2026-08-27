'use client';

import { useState, useEffect } from 'react';

export default function HomeOverlay() {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFading(true), 300);
        const hideTimer = setTimeout(() => setVisible(false), 1200);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ${
                fading ? 'opacity-0' : 'opacity-100'
            }`}
        />
    );
}
