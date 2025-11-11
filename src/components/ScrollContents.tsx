'use client';

import { useEffect } from 'react';
import CommonLottie from '@/components/CommonLottie';
import homeLottie from '@/assets/images/home_lottie.json';

export default function ScrollContents() {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // section 객체들을 감싸고있는 wrapper 객체를 변수에 할당
        const wrapper = document.getElementById('section-wrapper');

        if (!wrapper) {
            return;
        }

        // wrapper 내부 section 객체들을 변수에 할당
        const sections = wrapper.querySelectorAll('section');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // 감시 대상이 감지 되고 벗어나면 fade-in 클래스를 넣고 뺌
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    } else {
                        entry.target.classList.remove('fade-in');
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => observer.observe(section));

        // 해당 컴포넌트가 소멸될때 감시하는 것을 끊음
        return () => observer.disconnect();
    }, []);

    return (
        <div id="section-wrapper" className="w-full max-w-6xl py-8 px-16">
            <section className="common-section flex flex-col items-center opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <CommonLottie file={homeLottie} />
                <p className="mt-4 text-center subpixel-antialiased text-3xl">
                    Welcome to HyunDolog!
                </p>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <h2 className="text-2xl font-semibold mb-4">두 번째 콘텐츠 영역</h2>
                <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <h2 className="text-2xl font-semibold mb-4">세 번째 콘텐츠 영역</h2>
                <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <h2 className="text-2xl font-semibold mb-4">네 번째 콘텐츠 영역</h2>
                <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
            </section>
        </div>
    );
}
