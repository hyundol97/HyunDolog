'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CommonLottie from '@/components/common/CommonLottie';
import HomeLottie from '@/assets/lotties/home_lottie.json';
import MobileHomeLottie from '@/assets/lotties/mobile_home_lottie.json';

export default function LandingPage() {
    const router = useRouter();
    const [fadeOut, setFadeOut] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        router.prefetch('/home');
        return () => window.removeEventListener('resize', check);
    }, []);

    const handleEnter = () => {
        setFadeOut(true);
        setTimeout(() => router.push('/home'), 700);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-colors duration-700 ease-out ${fadeOut ? 'bg-black' : 'bg-white dark:bg-black'}`}
        >
            <div
                className={`flex flex-col items-center transition-opacity duration-700 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            >
                <CommonLottie file={isMobile ? MobileHomeLottie : HomeLottie} />
                <span className="mt-4 text-center subpixel-antialiased animate-[bounce_1.5s_infinite]">
                    <p className="text-xl md:text-3xl p-1">안녕하세요 👋</p>
                    <p className="text-xl md:text-3xl p-1">HyunDolog에 오신 것을 환영합니다!</p>
                </span>
                <button
                    type="button"
                    onClick={handleEnter}
                    className="mt-8 cursor-pointer px-8 py-4 text-sm md:text-base font-semibold text-white bg-indigo-600 rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                >
                    홈으로 이동하기
                </button>
            </div>
        </div>
    );
}
