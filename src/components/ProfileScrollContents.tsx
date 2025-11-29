'use client';

import { useEffect } from 'react';

import ProfileHistory from '@/components/profile/ProfileHistory';
import ProfileCareer from '@/components/profile/ProfileCareer';

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
                slideElement.style.transition = 'opacity 0.3s ease-out';
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
                threshold: 0.1,
                rootMargin: '50px',
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

    return (
        <div className="w-full flex flex-col justify-center">
            <section className="fade-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div
                    id="slide-wrapper"
                    className="relative w-full h-[60vh] md:h-[70vh] md:px-[5] overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
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
                <div className="md:hidden text-center animate-[bounce_2s_infinite]">
                    <p className="text-sm text-indigo-200">⬅️ 좌우로 스와이프하세요 ➡️</p>
                </div>
            </section>

            <section className="fade-section transition-all duration-1000 ease-out">
                <ProfileCareer idImgSrc={IdificationImage} />
            </section>
        </div>
    );
}
