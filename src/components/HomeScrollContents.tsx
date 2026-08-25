'use client';

import { useState } from 'react';
import Link from 'next/link';

import HomeSkills from '@/components/home/HomeSkills';
import HomeCommonLink from '@/components/home/HomeCommonLink';

import PortfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';
import PortfolioGaGyeVueImage from '@/assets/images/portfolio_gagyevue_logo.png';

const imageCDN = 'https://d3pm7uvxl6riza.cloudfront.net/interest';
const videoCDN = 'https://d3pm7uvxl6riza.cloudfront.net/video';
const videos = [
    `${videoCDN}/video_camping.mp4`,
    `${videoCDN}/video_jeju.mp4`,
    `${videoCDN}/video_swiss.mp4`,
    `${videoCDN}/video_paris.mp4`,
];

export default function HomeScrollContents() {
    const [videoIndex, setVideoIndex] = useState(0);

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

    return (
        <div id="section-wrapper" className="w-full animate-fadeIn">
            <section className="common-section p-4 md:p-12">
                <div className="relative w-full rounded-xl overflow-hidden">
                    <video
                        key={`${videoIndex}-${videos[videoIndex]}`}
                        src={videos[videoIndex]}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-96 md:h-[40rem] object-cover"
                        onEnded={() => setVideoIndex(i => (i + 1) % videos.length)}
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-6 p-6 md:p-10">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <span className="text-white/70 text-xs md:text-sm font-medium tracking-widest uppercase">
                                About Me
                            </span>
                            <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                                Welcome to Hyundolog!
                            </h2>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                                <span className="text-white text-sm md:text-base font-semibold">
                                    💼 사회경험
                                </span>
                                <span className="text-white/80 text-xs md:text-sm">
                                    {years}년 {months}개월 ({diffDays}일+)
                                </span>
                            </div>
                        </div>
                        <Link href="/profile">
                            <button
                                type="button"
                                className="cursor-pointer px-8 py-3 text-sm md:text-base font-semibold text-white border-2 border-white/60 rounded-full backdrop-blur-sm transition-all duration-200 ease-out hover:bg-white hover:text-indigo-600 hover:border-white hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                            >
                                Profile →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="common-section px-4">
                <div className="p-4 md:p-12">
                    <div className="w-full relative p-6 md:p-12 bg-background border border-cyan-500/40 dark:border-cyan-400/40 rounded-xl shadow-xl">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                                    Personal Projects
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Portfolio
                                </h2>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="grid grid-cols-2 gap-6 w-full">
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
                                        className="cursor-pointer px-4 py-3 bg-cyan-500 text-xs md:text-sm text-white font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-cyan-400 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                    >
                                        Portfolio →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="common-section px-4">
                <div className="p-4 md:p-12">
                    <div className="w-full relative p-6 md:p-12 bg-background border border-emerald-500/30 dark:border-emerald-400/30 rounded-xl shadow-sm">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
                                    Beyond the Screen
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Interests
                                </h2>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow w-full">
                                    <HomeCommonLink
                                        type="interest"
                                        linkUrl="/interest"
                                        imgSrc={`${imageCDN}/travel_swiss4.jpg`}
                                        imgAlt="interest travel image"
                                        contentName="여행"
                                    />
                                    <HomeCommonLink
                                        type="interest"
                                        linkUrl="/interest"
                                        imgSrc={`${imageCDN}/sports_hike1.jpg`}
                                        imgAlt="interest sports image"
                                        contentName="운동"
                                    />
                                    <HomeCommonLink
                                        type="interest"
                                        linkUrl="/interest"
                                        imgSrc={`${imageCDN}/reading_book1.jpg`}
                                        imgAlt="interest reading image"
                                        contentName="독서"
                                    />
                                </div>
                                <Link href="/interest" className="shrink-0">
                                    <button
                                        type="button"
                                        className="cursor-pointer px-4 py-3 bg-emerald-600 text-xs md:text-sm font-semibold text-white rounded-xl transition-all duration-200 ease-out hover:bg-emerald-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                    >
                                        Interest →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="common-section px-4">
                <HomeSkills />
            </section>
        </div>
    );
}
