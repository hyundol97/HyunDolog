'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';

interface IFrameWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    projectUrl: string;
    projectTitle: string;
    githubUrl?: string;
}

export default function IFrameWrapper({
    isOpen,
    onClose,
    projectUrl,
    projectTitle,
    githubUrl,
}: IFrameWrapperProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) setShow(true);
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300"
            style={{
                backgroundColor: show ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
            }}
            onClick={onClose}
        >
            <div
                className={`
                    bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-xl 
                    transition-all duration-300
                    ${show ? 'scale-100 opacity-100' : 'scale-80 opacity-0'}
                `}
                style={{
                    width: '393px', // iPhone 15 Pro width
                    height: '852px', // iPhone 15 Pro height
                    maxWidth: '90vw', // 모바일 대응
                    maxHeight: '90vh', // 모바일 대응
                }}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-3 sm:p-4 border-b dark:border-stone-700">
                    <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-semibold">{projectTitle}</h2>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                <Icon icon="mdi:github" width="24" height="24" color="#fff" />
                            </a>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="text-xl sm:text-2xl hover:text-indigo-300 transition-colors"
                    >
                        X
                    </button>
                </div>

                <iframe src={projectUrl} className="w-full h-full border-0" title={projectTitle} />
            </div>
        </div>,
        document.body
    );
}
