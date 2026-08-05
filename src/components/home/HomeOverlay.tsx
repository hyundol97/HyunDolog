'use client';

import { useState, useEffect } from 'react';

export default function HomeOverlay() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false);
    }, []);

    if (!visible) return null;

    return <div className="fixed inset-0 z-50 bg-white dark:bg-black" />;
}
