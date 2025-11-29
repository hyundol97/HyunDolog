'use client';

import Lottie from 'react-lottie-player';

interface CommonLottieProps {
    file: object;
    loop?: boolean;
    play?: boolean;
}

export default function CommonLottie({ file, loop = true, play = true }: CommonLottieProps) {
    return (
        <div className="w-full max-w-xs md:max-w-lg mx-auto aspect-square overflow-hidden">
            <Lottie loop={loop} animationData={file} play={play} />
        </div>
    );
}
