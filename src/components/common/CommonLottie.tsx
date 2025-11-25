'use client';

import Lottie from 'react-lottie-player';

interface CommonLottieProps {
    file: object;
    loop?: boolean;
    play?: boolean;
}

export default function CommonLottie({ file, loop = true, play = true }: CommonLottieProps) {
    return (
        <div className="w-full max-w-md mx-auto">
            <Lottie
                loop={loop}
                animationData={file}
                play={play}
                style={{ width: '100%', height: '100%' }}
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                }}
            />
        </div>
    );
}
