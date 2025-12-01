'use client';

import Lottie from 'react-lottie-player';

interface CommonLottieProps {
    file: object;
    loop?: boolean;
    play?: boolean;
}

export default function CommonLottie({ file, loop = true, play = true }: CommonLottieProps) {
    return (
        <div className="w-60 h-60 md:w-125 md:h-125 overflow-hidden">
            <Lottie loop={loop} animationData={file} play={play} />
        </div>
    );
}
