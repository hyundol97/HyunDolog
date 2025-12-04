'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HomeQuote from '@/components/home/HomeQuote';
import HomeSkills from '@/components/home/HomeSkills';
import HomeCommonLink from '@/components/home/HomeCommonLink';
import CommonLottie from '@/components/common/CommonLottie';
import Accordion from '@/components/common/Accordion';

import HomeLottie from '@/assets/lotties/home_lottie.json';
import MobileHomeLottie from '@/assets/lotties/mobile_home_lottie.json';
import ProfileLottie from '@/assets/lotties/profile_lottie.json';
import HomeProfileImage from '@/assets/images/id_picture.jpg';
import PortfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';
import InterestTravelImage from '@/assets/images/travel_swiss4.jpg';
import InterestSportsImage from '@/assets/images/interest_sports_hike1.jpg';
import InterestReadingImage from '@/assets/images/interest_reading_book1.jpg';

export default function HomeScrollContents() {
    const [isMobile, setIsMobile] = useState(false);

    const careerStartDay = new Date('2021-08-09T00:00:00+09:00'); // 사회경험 시작일
    const today = new Date();
    const diffMs = today.getTime() - careerStartDay.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // 여러번 연산할거 아니니까 메모이제이션 같은 것 안쓰는 것으로..
    let years = today.getFullYear() - careerStartDay.getFullYear();
    let months = today.getMonth() - careerStartDay.getMonth();
    let days = today.getDate() - careerStartDay.getDate();

    if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonth;
        months -= 1;
    }

    if (months < 0) {
        months += 12;
        years -= 1;
    }

    // 아코디언이 1개만 열릴 수 있도록 idx 형태의 key를 각각 부여
    const [isOpenAccordion, setIsOpenAccordion] = useState<number | null>(null);

    // 아코디언 컴포넌트에 props로 넘겨줄 토글 이벤트
    const handleToggle = (idx: number) => {
        setIsOpenAccordion(prev => (prev === idx ? null : idx));
    };

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        // 모바일 화면 크기 감지
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // section 객체들을 감싸고있는 wrapper 객체를 변수에 할당
        const wrapper = document.getElementById('section-wrapper');

        if (!wrapper) {
            return;
        }

        // wrapper 내부 section 객체들을 변수에 할당
        const sections = wrapper.querySelectorAll('section');

        // 할당된 변수에 아무것도 없으면 이하 코드를 실행하지 않음
        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // 감시 대상이 감지 되고 벗어나면 fade-in 클래스를 넣고 뺌
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('fade-out-y');
                        entry.target.classList.add('fade-in-y');
                    } else {
                        entry.target.classList.remove('fade-in-y');
                        entry.target.classList.add('fade-out-y');
                    }
                });
            },
            {
                root: null,
                rootMargin: '-15% 0px -15% 0px',
                threshold: window.innerWidth < 768 ? 0.25 : 0.5,
            }
        );

        sections.forEach(section => observer.observe(section));

        // 해당 컴포넌트가 소멸될때 감시하는 것을 끊음
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div id="section-wrapper" className="w-full">
            <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="flex flex-col items-center px-4">
                    <CommonLottie file={isMobile ? MobileHomeLottie : HomeLottie} />
                    <span className="mt-4 text-center subpixel-antialiased text-2xl md:text-3xl animate-[bounce_1.5s_infinite]">
                        <p className="text-xl md:text-3xl p-1">안녕하세요 👋</p>
                        <p className="text-xl md:text-3xl p-1">HyunDolog에 오신 것을 환영합니다!</p>
                        <p className="text-sm md:text-lg p-2">
                            본 페이지는 Next.js로 제작되었습니다.
                        </p>
                    </span>
                </div>
            </section>

            <section className="text-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                <HomeQuote />
            </section>

            <section className="common-section p-4 md:p-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-12">
                    <div className="w-full md:w-2/5 flex flex-col">
                        <div className="grid gap-y-2 text-base md:text-lg">
                            <Image
                                src={HomeProfileImage}
                                alt="home profile personal image"
                                width={150}
                                height={150}
                                className="object-cover rounded-full w-32 h-32 md:w-48 md:h-48 m-auto mb-3"
                                style={{ objectPosition: 'center 20%' }}
                            />
                            <Accordion
                                key={0}
                                title="🏠 거주지"
                                context="서울특별시 관악구 서림동"
                                onToggle={() => handleToggle(0)}
                                isOpen={isOpenAccordion === 0}
                            />
                            <Accordion
                                key={1}
                                title="🏫 최종학력"
                                context={[
                                    '소프트웨어학(공학사)',
                                    '소셜미디어매니지먼트소프프트웨어(융합 학사)',
                                ]}
                                onToggle={() => handleToggle(1)}
                                isOpen={isOpenAccordion === 1}
                            />
                            <div className="flex rounded-xl p-3 bg-gray-300 dark:bg-stone-800">
                                <p className="font-semibold text-base">💼 사회경험</p>
                                <p className="text-sm pl-2 content-center">
                                    +{diffDays}일 ({years}년 {months}개월)
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl mt-4 md:mt-auto text-center">
                            <Link href="/profile">
                                <button
                                    type="button"
                                    className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 text-sm md:text-base font-semibold text-white bg-indigo-600 rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    Profile 페이지로 이동하기
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                        <CommonLottie file={ProfileLottie} />
                    </div>
                </div>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                <div className="flex flex-col md:flex-row gap-6 p-4 md:p-12">
                    <div className="w-full md:w-1/2 relative p-6 md:p-12 border rounded-xl shadow-sm flex flex-col">
                        <div className="grid grid-cols-2 gap-4 flex-grow">
                            <HomeCommonLink
                                type="portfolo"
                                linkUrl="https://www.chungjungduo.com"
                                imgSrc={PortfolioChungchungduoImage}
                                imgAlt="chungjungduo logo image"
                                contentName="청정듀오 홈페이지"
                            />
                            <HomeCommonLink
                                type="portfolo"
                                linkUrl="https://www.chungjungduo.com"
                                imgSrc={PortfolioChungchungduoImage}
                                imgAlt="chungjungduo logo image"
                                contentName="청정듀오 홈페이지"
                                isEmpty={true}
                            />
                            <HomeCommonLink
                                type="portfolo"
                                linkUrl="https://www.chungjungduo.com"
                                imgSrc={PortfolioChungchungduoImage}
                                imgAlt="chungjungduo logo image"
                                contentName="청정듀오 홈페이지"
                                isEmpty={true}
                            />
                            <HomeCommonLink
                                type="portfolo"
                                linkUrl="https://www.chungjungduo.com"
                                imgSrc={PortfolioChungchungduoImage}
                                imgAlt="chungjungduo logo image"
                                contentName="청정듀오 홈페이지"
                                isEmpty={true}
                            />
                        </div>

                        <div className="mt-6 md:mt-10 text-center">
                            <Link href="/portfolio">
                                <button
                                    type="button"
                                    className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 bg-indigo-600 text-xs md:text-sm text-white font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    Portfoilo 페이지로 이동하기
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative p-6 md:p-12 border rounded-xl shadow-sm flex flex-col">
                        <div className="grid grid-cols-2 gap-4 flex-grow">
                            <HomeCommonLink
                                type="interest"
                                linkUrl="/interest"
                                imgSrc={InterestTravelImage}
                                imgAlt="interest travel image"
                                contentName="여행"
                            />
                            <HomeCommonLink
                                type="interest"
                                linkUrl="/interest"
                                imgSrc={InterestSportsImage}
                                imgAlt="interest sports image"
                                contentName="운동"
                            />
                            <HomeCommonLink
                                type="interest"
                                linkUrl="/interest"
                                imgSrc={InterestReadingImage}
                                imgAlt="interest reading image"
                                contentName="독서"
                            />
                            <HomeCommonLink
                                type="interest"
                                linkUrl="/interest"
                                imgSrc={InterestReadingImage}
                                imgAlt="interest reading image"
                                contentName="독서"
                                isEmpty={true}
                            />
                        </div>

                        <div className="mt-6 md:mt-10 text-center">
                            <Link href="/interest">
                                <button
                                    type="button"
                                    className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 bg-indigo-600 text-xs md:text-sm font-semibold text-white rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    Interest 페이지로 이동하기
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                <HomeSkills />
            </section>
        </div>
    );
}
