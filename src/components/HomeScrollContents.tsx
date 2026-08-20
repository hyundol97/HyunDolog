'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import HomeSkills from '@/components/home/HomeSkills';
import HomeCommonLink from '@/components/home/HomeCommonLink';

import PortfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';
import PortfolioGaGyeVueImage from '@/assets/images/portfolio_gagyevue_logo.png';

const awsCDN = 'https://d3pm7uvxl6riza.cloudfront.net/interest';

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
                root: wrapper,
                rootMargin: '-15% 0px -15% 0px',
                threshold: window.innerWidth < 768 ? 0 : 0.2,
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
        <div
            id="section-wrapper"
            className="w-full h-[calc(100vh-120px)] md:h-[calc(100vh-88px)] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] animate-fadeIn"
        >
            <section className="common-section p-4 md:p-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-12">
                    <div className="w-full flex flex-col">
                        <div className="grid gap-y-2 text-base md:text-lg">
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
                </div>
            </section>

            <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                <div className="flex flex-col gap-6 p-4 md:p-12">
                    <div className="w-full relative p-6 md:p-12 border rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="grid grid-cols-3 gap-6 flex-grow">
                                <HomeCommonLink
                                    type="portfolo"
                                    linkUrl="https://www.chungjungduo.com"
                                    imgSrc={PortfolioChungchungduoImage}
                                    imgAlt="chungjungduo logo image"
                                    contentName="청정듀오 홈페이지"
                                    isTerminated={true}
                                    terminatedUrl="https://chungjungduo.web.app/"
                                />
                                <HomeCommonLink
                                    type="portfolo"
                                    linkUrl="https://d366ozl1lmybii.cloudfront.net"
                                    imgSrc={PortfolioGaGyeVueImage}
                                    imgAlt="gagyevue logo image"
                                    contentName="나만의 소비기록, 가계뷰"
                                />
                            </div>
                            <Link href="/portfolio" className="shrink-0">
                                <button
                                    type="button"
                                    className="cursor-pointer px-4 py-3 bg-indigo-600 text-xs md:text-sm text-white font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    Portfolio →
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full relative p-6 md:p-12 border rounded-xl shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-grow">
                                <HomeCommonLink
                                    type="interest"
                                    linkUrl="/interest"
                                    imgSrc={`${awsCDN}/travel_swiss4.jpg`}
                                    imgAlt="interest travel image"
                                    contentName="여행"
                                />
                                <HomeCommonLink
                                    type="interest"
                                    linkUrl="/interest"
                                    imgSrc={`${awsCDN}/sports_hike1.jpg`}
                                    imgAlt="interest sports image"
                                    contentName="운동"
                                />
                                <HomeCommonLink
                                    type="interest"
                                    linkUrl="/interest"
                                    imgSrc={`${awsCDN}/reading_book1.jpg`}
                                    imgAlt="interest reading image"
                                    contentName="독서"
                                />
                            </div>
                            <Link href="/interest" className="shrink-0">
                                <button
                                    type="button"
                                    className="cursor-pointer px-4 py-3 bg-indigo-600 text-xs md:text-sm font-semibold text-white rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                >
                                    Interest →
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
