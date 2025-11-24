'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import ElementarySchoolImage from '@/assets/images/elementary_school.png';
import ArmyEntireImage from '@/assets/images/army_entire.jpg';
import UniversityImage from '@/assets/images/university.jpg';

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
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                const isAtEnd =
                    wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 10;
                const isAtStart = wrapper.scrollLeft <= 10;
                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;

                if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
                    // 마지막 슬라이드에서 아래로 또는 첫 번째 슬라이드에서 위로 스크롤 시 페이지 스크롤 허용
                    return;
                }

                e.preventDefault();
                wrapper.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
        };

        wrapper.addEventListener('wheel', handler);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'scale-100');
                        entry.target.classList.remove('opacity-50', 'scale-95');
                    } else {
                        entry.target.classList.add('opacity-50', 'scale-95');
                        entry.target.classList.remove('opacity-100', 'scale-100');
                    }
                });
            },
            {
                root: wrapper,
                threshold: 0.5,
                rootMargin: '-10% 0px',
            }
        );

        slides.forEach(slide => observer.observe(slide));

        return () => {
            wrapper.removeEventListener('wheel', handler);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="w-full flex flex-col justify-center">
            <section className="opacity-100 transition-all duration-1000 ease-out">
                <div
                    id="slide-wrapper"
                    className="relative w-full h-[70vh] md:px-[10vw] overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
                >
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">1997, 출생</h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src="/sub_logo.png"
                                alt="my born image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">2010, 초등학교 졸업</h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src={ElementarySchoolImage}
                                alt="elementary school image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">2013, 중학교 졸업</h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src="/sub_logo.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">2016, 고등학교 졸업</h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src="/sub_logo.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">
                            2019, 공군 병장 만기전역
                        </h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src={ArmyEntireImage}
                                alt="the army entire image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="slide-item snap-center shrink-0 w-screen p-4 md:w-full h-full flex flex-col justify-center items-center transition-all duration-500 ease-out">
                        <h3 className="text-2xl md:text-4xl font-bold mb-8">2022, 대학교 졸업</h3>
                        <div className="w-full max-w-sm h-80 mx-8 md:mx-0 md:w-96 md:h-96">
                            <Image
                                src={UniversityImage}
                                alt="university image"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
