import Image, { StaticImageData } from 'next/image';

interface ProfileAchievementsProps {
    achievementTitle: string;
    imgSrc?: string | StaticImageData;
    imgAlt?: string;
    compact?: boolean;
}

export default function ProfileAchievements({
    achievementTitle,
    imgSrc,
    imgAlt,
    compact = false,
}: ProfileAchievementsProps) {
    // university award 관련 이미지는 가로가 긴 형태임에따라, 좌측으로 90도 rotate 처리.
    const shouldRotate = Boolean(imgAlt?.includes('university award'));

    const containerClass = compact
        ? 'flex w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/40'
        : 'slide-item snap-center shrink-0 p-4 w-screen md:w-full h-full flex flex-col justify-center items-center';

    const imageWrapperClass = compact
        ? `mb-3 w-full flex justify-center ${shouldRotate ? 'max-w-[220px] md:max-w-[260px]' : 'max-w-[260px] md:max-w-[300px]'}`
        : `w-full mx-8 md:mx-0 mb-2 md:mb-4 ${shouldRotate ? 'max-w-xs md:max-w-sm flex justify-center' : 'max-w-sm md:max-w-md'}`;

    if (!imgSrc) {
        return (
            <div className={containerClass}>
                <div className="inline-flex items-center justify-center rounded-full border border-indigo-300 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-800 shadow-sm dark:border-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-200 md:text-base">
                    {achievementTitle}
                </div>
            </div>
        );
    }

    return (
        <div className={containerClass}>
            <div className={imageWrapperClass}>
                <Image
                    src={imgSrc}
                    alt={imgAlt ?? ''}
                    width={500}
                    height={500}
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 768px) 80vw, 500px"
                    className={`h-auto rounded-xl object-contain ${shouldRotate ? 'w-[80%] md:w-[90%] -rotate-90' : 'w-full'}`}
                />
            </div>
            {achievementTitle !== '' && (
                <p className="text-center text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200">
                    {achievementTitle}
                </p>
            )}
        </div>
    );
}
