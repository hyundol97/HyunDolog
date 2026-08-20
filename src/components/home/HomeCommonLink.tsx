'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface HomeCommonLinkProps {
    type: string;
    linkUrl: string;
    imgSrc: string | StaticImageData;
    imgAlt: string;
    contentName: string;
    isEmpty?: boolean;
    isTerminated?: boolean;
    terminatedUrl?: string;
}

export default function HomeCommonLink({
    type,
    linkUrl,
    imgSrc,
    imgAlt,
    contentName,
    isEmpty = false,
    isTerminated = false,
    terminatedUrl,
}: HomeCommonLinkProps) {
    const handleClick = (e: React.MouseEvent) => {
        if (!isTerminated) return;
        e.preventDefault();
        const confirmed = confirm(
            '서비스가 종료되어 테스트 환경으로 연결됩니다.\n 계속하시겠습니까?'
        );
        if (confirmed) window.open(terminatedUrl, '_blank');
    };

    return type === 'interest' ? (
        <Link
            href={linkUrl}
            className={`relative cursor-pointer rounded-xl shadow-sm aspect-square overflow-hidden group ${isEmpty ? 'invisible' : ''}`}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {contentName}
            </p>
        </Link>
    ) : (
        <Link
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`cursor-pointer border rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 md:gap-3 hover:scale-105 transition-all duration-200 no-underline p-2 md:min-h-52 ${isEmpty ? 'invisible' : ''}`}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                width={300}
                height={300}
                className="object-contain rounded-xl w-24 h-24 md:w-40 md:h-40"
            />
            <p className="text-[10px] md:text-xs text-center px-1">{contentName}</p>
        </Link>
    );
}
