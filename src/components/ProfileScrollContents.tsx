'use client';

import { useEffect } from 'react';

import ProfileHistory from '@/components/profile/ProfileHistory';
import ProfileCareer from '@/components/profile/ProfileCareer';
import ProfileAchievements from '@/components/profile/ProfileAchievements';

import YoungAgeImage from '@/assets/images/young_age.jpg';
import ElementarySchoolImage from '@/assets/images/elementary_school.png';
import MiddleSchoolImage from '@/assets/images/middleschool_soccer.jpg';
import HighSchoolImage from '@/assets/images/highschool_graduate.jpg';
import ArmyEntireImage from '@/assets/images/army_entire1.jpg';
import UniversityGraduateImage from '@/assets/images/university_graduate1.jpg';
import IdificationImage from '@/assets/images/id_picture.jpg';
import ElementaryShoolAward from '@/assets/images/scan1.jpg';
import MiddleSchoolAward1 from '@/assets/images/scan2.jpg';
import MiddleSchoolAward2 from '@/assets/images/scan3.jpg';
import HighSchoolAward from '@/assets/images/scan4.jpg';
import UniversityAward1 from '@/assets/images/scan5.jpg';
import UniversityAward2 from '@/assets/images/scan6.jpg';
import UniversityAward3 from '@/assets/images/scan7.jpg';
import Certification1 from '@/assets/images/hangooksa.jpg';
import Certification2 from '@/assets/images/kineungsa.jpg';
import Certification3 from '@/assets/images/yutong.jpg';

export default function ProfileScrollContents() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // iOS Safari 스크롤 복원 방지
        window.history.scrollRestoration = 'manual';
        
        // 뷰포트 메타태그 강제 설정 (iOS 줌 방지)
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }

        const wrapper = document.getElementById('slide-wrapper');
        if (!wrapper) return;

        const slides = wrapper.querySelectorAll('.slide-item');
        const fadeSections = document.querySelectorAll('.fade-section');

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

        let observerTimeout: NodeJS.Timeout;
        const fadeObserver = new IntersectionObserver(
            entries => {
                clearTimeout(observerTimeout);
                observerTimeout = setTimeout(() => {
                    entries.forEach(entry => {
                        const target = entry.target as HTMLElement;
                        if (entry.isIntersecting) {
                            if (!target.classList.contains('opacity-100')) {
                                // 강제 리플로우 방지
                                target.style.transform = 'translateZ(0)';
                                target.style.willChange = 'opacity, transform';
                                
                                requestAnimationFrame(() => {
                                    target.classList.add('opacity-100', 'translate-y-0');
                                    target.classList.remove('opacity-0', 'translate-y-8');
                                    
                                    setTimeout(() => {
                                        target.style.willChange = 'auto';
                                        target.style.transform = '';
                                    }, 1200);
                                });
                            }
                        }
                    });
                }, 50);
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px',
            }
        );

        fadeSections.forEach(section => fadeObserver.observe(section));

        return () => {
            wrapper.removeEventListener('scroll', onScroll);
            wrapper.removeEventListener('wheel', onWheel);
            wrapper.removeEventListener('touchstart', onTouchStart);
            wrapper.removeEventListener('touchmove', onTouchMove);
            fadeObserver.disconnect();

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

    const achievementData = [
        {
            achievementTitle: '',
            imgSrc: ElementaryShoolAward,
            imgAlt: 'elementary school award image',
        },
        {
            achievementTitle: '',
            imgSrc: MiddleSchoolAward1,
            imgAlt: 'middle school award1 image',
        },
        {
            achievementTitle: '',
            imgSrc: MiddleSchoolAward2,
            imgAlt: 'middle school award2 image',
        },
        {
            achievementTitle: '',
            imgSrc: HighSchoolAward,
            imgAlt: 'high school award image',
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
        {
            achievementTitle: '한국사능력검정시험 2급',
            imgSrc: Certification1,
            imgAlt: 'certification image1',
        },
        {
            achievementTitle: '정보처리기능사',
            imgSrc: Certification2,
            imgAlt: 'certification image2',
        },
        {
            achievementTitle: '유통관리사 3급',
            imgSrc: Certification3,
            imgAlt: 'certification image3',
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
                <div className="md:hidden text-center animate-[bounce_2s_infinite] mt-4">
                    <p className="text-sm text-indigo-200">⬅️ 좌우로 스와이프하세요 ➡️</p>
                </div>
            </section>

            <section className="fade-section transition-all duration-1000 ease-out">
                <ProfileCareer idImgSrc={IdificationImage} />
            </section>

            <section className="fade-section transition-all duration-1000 ease-out" style={{ minHeight: '100vh' }}>
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                    Achievements
                </h2>
                <div className="space-y-6">
                    {achievementData.map((data, index) => (
                        <div 
                            key={index} 
                            className="min-h-[250px] transform-gpu"
                            style={{ 
                                contain: 'layout style paint',
                                willChange: index < 3 ? 'transform' : 'auto'
                            }}
                        >
                            <ProfileAchievements
                                achievementTitle={data.achievementTitle}
                                imgSrc={data.imgSrc}
                                imgAlt={data.imgAlt}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
