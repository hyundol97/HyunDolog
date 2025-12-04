'use client';

import Lottie from 'react-lottie-player';

interface CommonLottieProps {
    file: object;
    loop?: boolean;
    play?: boolean;
}

export default function CommonLottie({ file, loop = true, play = true }: CommonLottieProps) {
    return (
        <div className="w-80 h-80 md:w-125 md:h-125 overflow-hidden flex items-center justify-center">
            <Lottie
                loop={loop}
                animationData={file}
                play={play}
                style={{
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                }}
            />
        </div>
    );
}
