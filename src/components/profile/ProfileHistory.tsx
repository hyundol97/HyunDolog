'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function ProfileHistory() {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // div 객체들을 감싸고있는 wrapper 객체를 변수에 할당
        const wrapper = document.getElementById('slide-wrapper');

        if (!wrapper) {
            return;
        }

        const slides = wrapper.querySelectorAll('.slide-item');
        if (slides.length === 0) return;

        const handler = (e: WheelEvent) => {
            e.preventDefault();
            wrapper.scrollBy({
                left: e.deltaY,
                behavior: 'smooth',
            });
        };

        wrapper.addEventListener('wheel', (e: WheelEvent) => {
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                e.preventDefault();
                wrapper.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
        });

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100');
                        entry.target.classList.remove('opacity-0');
                    } else {
                        entry.target.classList.add('opacity-0');
                        entry.target.classList.remove('opacity-100');
                    }
                });
            },
            {
                root: null, // 뷰포트 기준으로 변경
                threshold: 0.6,
            }
        );

        slides.forEach(slide => observer.observe(slide));

        // 해당 컴포넌트가 소멸될때 감시하는 것을 끊음
        return () => {
            wrapper.removeEventListener('wheel', handler);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="w-full h-screen flex flex-col">
            <section className="opacity-100 translate-x-8 transition-all duration-1000 ease-out">
                <div
                    id="slide-wrapper"
                    className="relative w-full h-[90vh] p-12 overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
                >
                    <div className="slide-item snap-center shrink-0 w-[80vw] h-full flex flex-col justify-center items-center transition-opacity duration-700">
                        <h3>1997, 출생</h3>
                        <Image
                            src="/sub_logo.png"
                            alt="my born image"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="slide-item snap-center shrink-0 w-[80vw] h-full flex flex-col justify-center items-center transition-opacity duration-700">
                        <h3>2010, 초등학교 졸업</h3>
                        <Image
                            src="/sub_logo.png"
                            alt=""
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="slide-item snap-center shrink-0 w-[80vw] h-full flex flex-col justify-center items-center transition-opacity duration-700">
                        <h3>2013, 중학교 졸업</h3>
                        <Image
                            src="/sub_logo.png"
                            alt=""
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="slide-item snap-center shrink-0 w-[80vw] h-full flex flex-col justify-center items-center transition-opacity duration-700">
                        <h3>2016, 고등학교 졸업</h3>
                        <Image
                            src="/sub_logo.png"
                            alt=""
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                    <div className="slide-item snap-center shrink-0 w-[80vw] h-full flex flex-col justify-center items-center transition-opacity duration-700">
                        <h3>2022, 대학교 졸업</h3>
                        <Image
                            src="/sub_logo.png"
                            alt=""
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
