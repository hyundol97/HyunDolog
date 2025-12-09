import Image, { StaticImageData } from 'next/image';

interface ProfileAchievementsProps {
    achievementTitle: string;
    imgSrc: string | StaticImageData;
    imgAlt: string;
}

export default function ProfileAchievements({
    achievementTitle,
    imgSrc,
    imgAlt,
}: ProfileAchievementsProps) {
    // university award 관련 이미지는 가로가 긴 형태임에따라, 좌측으로 90도 rotate 처리.
    const shouldRotate = imgAlt.includes('university award');

    return (
        <div className="slide-item snap-center shrink-0 p-4 w-screen md:w-full h-full flex flex-col justify-center items-center">
            <div
                className={`w-full mx-8 md:mx-0 mb-2 md:mb-4 ${shouldRotate ? 'max-w-xs md:max-w-sm flex justify-center' : 'max-w-sm md:max-w-md'}`}
            >
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={500}
                    height={500}
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 768px) 80vw, 500px"
                    className={`object-contain h-auto rounded-xl ${shouldRotate ? 'w-[80%] md:w-[90%] -rotate-90' : 'w-full'}`}
                />
            </div>
            <p className="text-sm md:text-xl font-base">
                {achievementTitle !== '' ? achievementTitle : ''}
            </p>
        </div>
    );
}
