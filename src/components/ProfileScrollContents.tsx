'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import ProfileHistory from '@/components/profile/ProfileHistory';

import YoungAgeImage from '@/assets/images/young_age.jpg';
import ElementarySchoolImage from '@/assets/images/elementary_school.png';
import MiddleSchoolImage from '@/assets/images/middleschool_soccer.jpg';
import HighSchoolImage from '@/assets/images/highschool_graduate.jpg';
import ArmyEntireImage from '@/assets/images/army_entire1.jpg';
import UniversityGraduateImage from '@/assets/images/university_graduate1.jpg';
import IdificationImage from '@/assets/images/id_picture.jpg';

export default function ProfileScrollContents() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const wrapper = document.getElementById('slide-wrapper');
        if (!wrapper) return;

        const slides = wrapper.querySelectorAll('.slide-item');
        const fadeSections = document.querySelectorAll('.fade-section');

        if (slides.length === 0) return;

        const updateSlideOpacity = () => {
            const wrapperRect = wrapper.getBoundingClientRect();
            const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

            slides.forEach(slide => {
                const slideRect = slide.getBoundingClientRect();
                const slideCenter = slideRect.left + slideRect.width / 2;
                const distance = Math.abs(slideCenter - wrapperCenter);
                const maxDistance = wrapperRect.width / 2;
                const opacity = Math.max(0.3, 1 - distance / maxDistance);

                const slideElement = slide as HTMLElement;
                slideElement.style.transition = 'opacity 0.5s ease-out';
                slideElement.style.opacity = opacity.toString();
            });
        };

        const onScroll = () => {
            updateSlideOpacity();
        };

        wrapper.addEventListener('scroll', onScroll);
        updateSlideOpacity();

        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                const isAtEnd =
                    wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 10;
                const isAtStart = wrapper.scrollLeft <= 10;

                const isScrollingDown = e.deltaY > 0;
                const isScrollingUp = e.deltaY < 0;

                if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
                    return;
                }

                e.preventDefault();
                wrapper.scrollBy({ left: e.deltaY, behavior: 'smooth' });
            }
        };

        wrapper.addEventListener('wheel', onWheel);

        let touchStartX = 0;
        let touchStartY = 0;

        const onTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            const dx = e.touches[0].clientX - touchStartX;
            const dy = e.touches[0].clientY - touchStartY;

            if (Math.abs(dx) < Math.abs(dy)) {
                const isAtEnd =
                    wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth - 10;
                const isAtStart = wrapper.scrollLeft <= 10;

                const isScrollingDown = dy < 0;
                const isScrollingUp = dy > 0;

                if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
                    return;
                }

                e.preventDefault();
                wrapper.scrollLeft -= dy;
            }
        };

        wrapper.addEventListener('touchstart', onTouchStart, { passive: false });
        wrapper.addEventListener('touchmove', onTouchMove, { passive: false });

        const fadeObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                    } else {
                        entry.target.classList.add('opacity-0', 'translate-y-8');
                        entry.target.classList.remove('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        fadeSections.forEach(section => fadeObserver.observe(section));

        return () => {
            wrapper.removeEventListener('scroll', onScroll);
            wrapper.removeEventListener('wheel', onWheel);
            wrapper.removeEventListener('touchstart', onTouchStart);
            wrapper.removeEventListener('touchmove', onTouchMove);
            fadeObserver.disconnect();
        };
    }, []);

    return (
        <div className="w-full flex flex-col justify-center">
            <section className="fade-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div
                    id="slide-wrapper"
                    className="relative w-full h-[60vh] md:px-[5] overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
                >
                    <ProfileHistory
                        historyTitle="1997, 출생"
                        imgSrc={YoungAgeImage}
                        imgAlt="my born image"
                    />
                    <ProfileHistory
                        historyTitle="2010, 초등학교 졸업"
                        imgSrc={ElementarySchoolImage}
                        imgAlt="elementary school image"
                    />
                    <ProfileHistory
                        historyTitle="2013, 중학교 졸업"
                        imgSrc={MiddleSchoolImage}
                        imgAlt="middle school image"
                    />
                    <ProfileHistory
                        historyTitle="2016, 고등학교 졸업"
                        imgSrc={HighSchoolImage}
                        imgAlt="high school image"
                    />
                    <ProfileHistory
                        historyTitle="2019, 공군 병장 만기전역"
                        imgSrc={ArmyEntireImage}
                        imgAlt="the army entire image"
                    />
                    <ProfileHistory
                        historyTitle="2022, 대학교 졸업"
                        imgSrc={UniversityGraduateImage}
                        imgAlt="university graduate image"
                    />
                </div>
            </section>

            <section className="fade-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="relative w-full px-2 md:px-[10] py-20">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 bg-gray-300 dark:bg-stone-800">
                        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                            Profile
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    src={IdificationImage}
                                    alt="profile image"
                                    width={200}
                                    height={200}
                                    className="object-cover w-48 h-48 rounded-full border-4 border-gray-200"
                                />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                        <span className="text-sm text-gray-600 font-medium">
                                            이름
                                        </span>
                                        <p className="text-lg font-semibold">송현석</p>
                                        <p className="text-sm">[본관] 여산송씨 원윤공파 28대손</p>
                                    </div>
                                    <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                        <span className="text-sm text-gray-600 font-medium">
                                            생년월일
                                        </span>
                                        <p className="text-lg font-semibold">
                                            1997.08.19 (만 28세)
                                        </p>
                                    </div>
                                    <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                        <span className="text-sm text-gray-600 font-medium">
                                            최종학력
                                        </span>
                                        <p className="text-lg font-semibold">세종대학교</p>
                                        <p className="text-sm">(3.62 / 4.5)</p>
                                        <p className="text-sm">[전공] 소프트웨어학</p>
                                        <p className="text-sm">
                                            [연계전공] 소셜미디어매니지먼트소프트웨어
                                        </p>
                                    </div>
                                    <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                        <span className="text-sm text-gray-600 font-medium">
                                            병역
                                        </span>
                                        <p className="text-lg font-semibold">공군 병장 만기전역</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-50 md:mt-30">
                            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                                Career
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                            DEEP:NOID (딥노이드)
                                        </h3>
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                            Career 1
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        ~~~~ 회사이다.
                                    </p>
                                    <div className="bg-gray-100 dark:bg-stone-600 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                            직무 : 프론트엔드 개발
                                        </h4>
                                        <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-green-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                            (주) 미로 (LastOrder)
                                        </h3>
                                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                            Career 2
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        ~~~~ 회사이다.
                                    </p>
                                    <div className="bg-gray-100 dark:bg-stone-600 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                            직무 : 프론트엔드 개발
                                        </h4>
                                        <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                            주식회사본도
                                        </h3>
                                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                                            Career 3 (Now)
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        ~~~~ 회사이다.
                                    </p>
                                    <div className="bg-gray-100 dark:bg-stone-600 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                            직무 : 프론트엔드 개발
                                        </h4>
                                        <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                            <li>• ~~ 개발하였다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
