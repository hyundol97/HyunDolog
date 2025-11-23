import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface HomeCommonLinkProps {
    type: string;
    linkUrl: string;
    imgSrc: string | StaticImageData;
    imgAlt: string;
    contentName: string;
    isEmpty?: boolean;
}

export default function HomeCommonLink({
    type,
    linkUrl,
    imgSrc,
    imgAlt,
    contentName,
    isEmpty = false,
}: HomeCommonLinkProps) {
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
            className={`cursor-pointer border rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center gap-2 md:gap-3 hover:scale-105 transition-all duration-200 no-underline ${isEmpty ? 'invisible' : ''}`}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                width={100}
                height={100}
                className="object-cover rounded-xl w-16 h-16 md:w-20 md:h-20"
            />
            <p className="text-xs md:text-sm text-center px-1">{contentName}</p>
        </Link>
    );
}
