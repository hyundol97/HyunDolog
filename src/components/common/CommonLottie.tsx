'use client';

import Lottie from 'react-lottie-player';

interface CommonLottieProps {
    file: object;
    loop?: boolean;
    play?: boolean;
}

export default function CommonLottie({ file, loop = true, play = true }: CommonLottieProps) {
    return (
        <div className="w-full max-w-xs md:max-w-md mx-auto overflow-hidden">
            <Lottie
                loop={loop}
                animationData={file}
                play={play}
                style={{ 
                    width: '100%', 
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                }}
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid meet',
                }}
            />
        </div>
    );
}
