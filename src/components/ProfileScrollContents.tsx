'use client';

import { useEffect, Suspense } from 'react';

import ProfileHistory from '@/components/profile/ProfileHistory';
import ProfileCareer from '@/components/profile/ProfileCareer';
import ProfileAchievements from '@/components/profile/ProfileAchievements';

import YoungAgeImage from '@/assets/images/young_age.jpg';
import ElementarySchoolImage from '@/assets/images/elementary_school.png';
import MiddleSchoolImage from '@/assets/images/middle_school.png';
import HighSchoolImage from '@/assets/images/high_school.png';
import ArmyEntireImage from '@/assets/images/army_entire1.jpg';
import UniversityGraduateImage from '@/assets/images/university_graduate1.jpg';
import IdificationImage from '@/assets/images/id_picture.jpg';
import ElementaryShoolAward from '@/assets/images/scan1.jpg';
import UniversityAward1 from '@/assets/images/scan5.jpg';
import UniversityAward2 from '@/assets/images/scan6.jpg';
import UniversityAward3 from '@/assets/images/scan7.jpg';

export default function ProfileScrollContents() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // iOS Safari 스크롤 복원 방지
        window.history.scrollRestoration = 'manual';

        // 뷰포트 메타태그 강제 설정 (iOS 줌 방지)
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute(
                'content',
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            );
        }

        const wrapper = document.getElementById('slide-wrapper');
        if (!wrapper) return;

        const slides = wrapper.querySelectorAll('.slide-item');

        if (slides.length === 0) return;

        // 초기 transition 설정
        slides.forEach(slide => {
            const slideElement = slide as HTMLElement;
            slideElement.style.transition = 'opacity 0.2s ease-out';
        });

        let animationId: number;
        let isAnimating = false;

        const updateSlideOpacity = () => {
            if (isAnimating) return;

            isAnimating = true;
            animationId = requestAnimationFrame(() => {
                const wrapperRect = wrapper.getBoundingClientRect();
                const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

                slides.forEach(slide => {
                    const slideRect = slide.getBoundingClientRect();
                    const slideCenter = slideRect.left + slideRect.width / 2;
                    const distance = Math.abs(slideCenter - wrapperCenter);
                    const maxDistance = wrapperRect.width / 2;
                    const opacity = Math.max(0.4, 1 - distance / maxDistance);

                    const slideElement = slide as HTMLElement;
                    slideElement.style.opacity = opacity.toString();
                });

                isAnimating = false;
            });
        };

        let scrollTimeout: NodeJS.Timeout;
        const onScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateSlideOpacity, 10);
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

        return () => {
            wrapper.removeEventListener('scroll', onScroll);
            wrapper.removeEventListener('wheel', onWheel);
            wrapper.removeEventListener('touchstart', onTouchStart);
            wrapper.removeEventListener('touchmove', onTouchMove);

            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);

    const historyData = [
        {
            historyTitle: '1997, 출생',
            imgSrc: YoungAgeImage,
            imgAlt: 'my born image',
        },
        {
            historyTitle: '2010, 초등학교 졸업',
            imgSrc: ElementarySchoolImage,
            imgAlt: 'elementary school image',
        },
        {
            historyTitle: '2013, 중학교 졸업',
            imgSrc: MiddleSchoolImage,
            imgAlt: 'middle school image',
        },
        {
            historyTitle: '2016, 고등학교 졸업',
            imgSrc: HighSchoolImage,
            imgAlt: 'high school image',
        },
        {
            historyTitle: '2019, 공군 병장 만기전역',
            imgSrc: ArmyEntireImage,
            imgAlt: 'the army entire image',
        },
        {
            historyTitle: '2022, 대학교 졸업',
            imgSrc: UniversityGraduateImage,
            imgAlt: 'university graduate image',
        },
    ];

    const awardData = [
        {
            achievementTitle: '',
            imgSrc: ElementaryShoolAward,
            imgAlt: 'elementary school award image',
        },
        {
            achievementTitle: '',
            imgSrc: UniversityAward1,
            imgAlt: 'university award1 image',
        },
        {
            achievementTitle: '',
            imgSrc: UniversityAward2,
            imgAlt: 'university award2 image',
        },
        {
            achievementTitle: '',
            imgSrc: UniversityAward3,
            imgAlt: 'university award3 image',
        },
    ];

    const certificateData = [
        {
            achievementTitle: '한국사능력검정시험 2급',
        },
        {
            achievementTitle: '정보처리기사',
        },
    ];

    return (
        <div className="w-full flex flex-col justify-center">
            <section>
                <div
                    id="slide-wrapper"
                    className="relative w-full h-[45vh] md:h-[70vh] md:px-[5] overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
                >
                    {historyData.map((data, index) => (
                        <ProfileHistory
                            key={index}
                            historyTitle={data.historyTitle}
                            imgSrc={data.imgSrc}
                            imgAlt={data.imgAlt}
                        />
                    ))}
                </div>
                <div className="md:hidden text-center animate-[bounce_2s_infinite] mt-4">
                    <p className="text-sm text-indigo-200">⬅️ 좌우로 스와이프하세요 ➡️</p>
                </div>
            </section>

            <section>
                <Suspense>
                    <ProfileCareer idImgSrc={IdificationImage} />
                </Suspense>
            </section>

            <section className="min-h-[100vh] px-4 py-10 md:px-8 md:py-14">
                <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200/80 bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-8">
                    <div className="mb-8 text-center md:mb-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500 dark:text-indigo-300">
                            Recognition
                        </p>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                            <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-indigo-200 dark:to-violet-300">
                                Achievements
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-5">
                            <div className="flex items-center justify-center gap-3">
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600" />
                                <h3 className="text-center text-xl font-bold text-slate-700 dark:text-slate-200 md:text-2xl">
                                    상장
                                </h3>
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600" />
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                {awardData.map((data, index) => (
                                    <ProfileAchievements
                                        key={`award-${index}`}
                                        achievementTitle={data.achievementTitle}
                                        imgSrc={data.imgSrc}
                                        imgAlt={data.imgAlt}
                                        compact
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center justify-center gap-3">
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-600" />
                                <h3 className="text-center text-xl font-bold text-slate-700 dark:text-slate-200 md:text-2xl">
                                    자격증
                                </h3>
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-600" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {certificateData.map((data, index) => (
                                    <div
                                        key={`certificate-${index}`}
                                        className="group flex items-center gap-3 rounded-2xl border border-indigo-200/80 bg-gradient-to-r from-indigo-50 via-white to-violet-50 px-5 py-3 shadow-[0_12px_24px_rgba(99,102,241,0.08)] ring-1 ring-indigo-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_rgba(99,102,241,0.12)] dark:border-indigo-700 dark:from-indigo-950/70 dark:via-slate-900 dark:to-violet-950/70 dark:ring-indigo-800/80"
                                    >
                                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-[0_0_0_4px_rgba(99,102,241,0.12)] dark:from-indigo-300 dark:to-violet-300" />
                                        <span className="text-sm font-semibold tracking-tight text-indigo-800 dark:text-indigo-100 md:text-base">
                                            {data.achievementTitle}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
