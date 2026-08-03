import Image, { StaticImageData } from 'next/image';

interface ProfileHistoryProps {
    historyTitle: string;
    imgSrc: string | StaticImageData;
    imgAlt: string;
}

export default function ProfileHistory({ historyTitle, imgSrc, imgAlt }: ProfileHistoryProps) {
    return (
        <div className="slide-item snap-center shrink-0 p-4 w-[85vw] md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">{historyTitle}</h3>
            <div className="w-56 h-56 md:w-96 md:h-96">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
        </div>
    );
}
