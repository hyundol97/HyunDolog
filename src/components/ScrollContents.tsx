'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import CommonLottie from '@/components/CommonLottie';
import Accordion from '@/components/Accordion';

import homeLottie from '@/assets/images/home_lottie.json';
import homeProfileImage from '@/assets/images/home_profile_personal.jpg';
import profileImage from '@/assets/images/profile.jpg';
import portfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';
import interestTravelImage from '@/assets/images/travel_swiss4.jpg';
import interestSportsImage from '@/assets/images/interest_sports_hike1.jpg';
import interestReadingImage from '@/assets/images/interest_reading_book1.jpg';

interface ScollContentsProps {
    pageName: string;
    effectDirection?: string;
}

export default function ScrollContents({ pageName, effectDirection = 'y' }: ScollContentsProps) {
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

        const fadeInStyle = effectDirection === 'y' ? 'fade-in-y' : 'fade-in-x';
        const fadeOutStyle = effectDirection === 'y' ? 'fade-out-y' : 'fade-out-x';

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // 감시 대상이 감지 되고 벗어나면 fade-in 클래스를 넣고 뺌
                    if (entry.isIntersecting) {
                        entry.target.classList.remove(fadeOutStyle);
                        entry.target.classList.add(fadeInStyle);
                    } else {
                        entry.target.classList.remove(fadeInStyle);
                        entry.target.classList.add(fadeOutStyle);
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
        return () => observer.disconnect();
    }, [effectDirection]);

    return (
        <div id="section-wrapper" className="w-full">
            {pageName === 'home' ? (
                <>
                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex flex-col items-center px-4">
                            <CommonLottie file={homeLottie} />
                            <span className="mt-4 text-center subpixel-antialiased text-2xl md:text-3xl animate-[bounce_1.5s_infinite]">
                                <p className="text-2xl md:text-3xl p-1">안녕하세요 👋</p>
                                <p className="text-2xl md:text-3xl p-1">
                                    HyunDolog에 오신 것을 환영합니다!
                                </p>
                                <p className="text-base md:text-lg p-2">
                                    본 페이지는 Next.js로 제작되었습니다.
                                </p>
                            </span>
                        </div>
                    </section>

                    <section className="text-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                        <div className="relative p-6 md:p-12 border rounded-xl shadow-sm">
                            <span className="absolute -top-7 left-6 md:left-12 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full bg-stone-800 text-white dark:bg-white dark:text-stone-800">
                                오늘의 명언
                            </span>

                            <div className="grid gap-y-3">
                                <span className="text-lg md:text-2xl p-1">
                                    <p className="italic text-stone-500 text-sm md:text-base">
                                        子曰 知之者不如好之者 好之者不如樂之者
                                    </p>
                                    <p className="text-base md:text-xl">
                                        "공자께서 말씀하셨다. 아는 자는 좋아하는 자만 못하고,
                                        좋아하는 자는 즐기는 자만 못하다."
                                    </p>
                                    <p className="text-sm md:text-lg">(공자『논어』中)</p>
                                </span>

                                <span className="text-lg md:text-2xl p-1">
                                    <p className="italic text-stone-500 text-sm md:text-base">
                                        Try not to become a man of success but rather to become a
                                        man of value.
                                    </p>
                                    <p className="text-base md:text-xl">
                                        "성공한 사람보다는 가치 있는 사람이 되라."
                                    </p>
                                    <p className="text-sm md:text-lg">(알버트 아인슈타인)</p>
                                </span>

                                <span className="text-lg md:text-2xl p-1">
                                    <p className="italic text-stone-500 text-sm md:text-base">
                                        Everyone thinks of changing the world, but no one thinks of
                                        changing himself.
                                    </p>
                                    <p className="text-base md:text-xl">
                                        "모두가 세상을 변화시키려고 생각하지만, 정작 스스로
                                        변하겠다고 생각하는 사람은 없다."
                                    </p>
                                    <p className="text-sm md:text-lg">(레프 톨스토이)</p>
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="common-section p-4 md:p-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-x-12">
                            <div className="w-full md:w-2/5 flex flex-col">
                                <div className="grid gap-y-2 text-base md:text-lg">
                                    <Image
                                        src={homeProfileImage}
                                        alt="home profile personal image"
                                        width={150}
                                        height={150}
                                        className="object-cover rounded-full w-32 h-32 md:w-48 md:h-48 m-auto mb-3"
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
                                            className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 text-sm md:text-base bg-indigo-600 font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                        >
                                            Profile 페이지로 이동하기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 rounded-xl overflow-hidden aspect-square">
                                <Image
                                    src={profileImage}
                                    alt="home profile image"
                                    width={400}
                                    height={400}
                                    className="object-cover rounded-xl w-full h-full grayscale-[0.75]"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-12">
                            <div className="w-full md:w-1/2 relative p-6 md:p-12 border rounded-xl shadow-sm flex flex-col">
                                <div className="grid grid-cols-2 gap-4 flex-grow">
                                    <Link
                                        href="https://www.chungjungduo.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer border rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center gap-2 md:gap-3 hover:scale-105 transition-all duration-200 no-underline"
                                    >
                                        <Image
                                            src={portfolioChungchungduoImage}
                                            alt="chungjungduo logo image"
                                            width={100}
                                            height={100}
                                            className="object-cover rounded-xl w-16 h-16 md:w-20 md:h-20"
                                        />
                                        <p className="text-xs md:text-sm text-center px-1">
                                            청정듀오 홈페이지
                                        </p>
                                    </Link>
                                    <a className="cursor-pointer border rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-200 no-underline invisible"></a>
                                    <a className="cursor-pointer border rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-200 no-underline invisible"></a>
                                    <a className="cursor-pointer border rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-200 no-underline invisible"></a>
                                </div>

                                <div className="mt-6 md:mt-10 text-center">
                                    <Link href="/portfolio">
                                        <button
                                            type="button"
                                            className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 bg-indigo-600 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                        >
                                            Portfoilo 페이지로 이동하기
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 relative p-6 md:p-12 border rounded-xl shadow-sm flex flex-col">
                                <div className="grid grid-cols-2 gap-4 flex-grow">
                                    <Link
                                        href="/interest"
                                        className="relative cursor-pointer rounded-xl shadow-sm aspect-square overflow-hidden group"
                                    >
                                        <Image
                                            src={interestTravelImage}
                                            alt="interest travel image"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            여행
                                        </p>
                                    </Link>
                                    <Link
                                        href="/interest"
                                        className="relative cursor-pointer rounded-xl shadow-sm aspect-square overflow-hidden group"
                                    >
                                        <Image
                                            src={interestSportsImage}
                                            alt="interes sports image"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            운동
                                        </p>
                                    </Link>
                                    <Link
                                        href="/interest"
                                        className="relative cursor-pointer rounded-xl shadow-sm aspect-square overflow-hidden group"
                                    >
                                        <Image
                                            src={interestReadingImage}
                                            alt="interest reading image"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            독서
                                        </p>
                                    </Link>
                                    <Link
                                        href="/interest"
                                        className="relative cursor-pointer rounded-xl shadow-sm aspect-square overflow-hidden group invisible"
                                    >
                                        <Image
                                            src="/file.svg"
                                            alt="empty"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 text-white text-xl font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"></p>
                                    </Link>
                                </div>

                                <div className="mt-6 md:mt-10 text-center">
                                    <Link href="/interest">
                                        <button
                                            type="button"
                                            className="cursor-pointer p-4 md:p-6 w-4/5 md:w-3/5 bg-indigo-600 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                        >
                                            Interest 페이지로 이동하기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-4 md:p-12">
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h1 className="inline-block text-xl md:text-3xl font-bold px-3 md:px-4 py-2 mb-6 bg-gradient-to-r from-cyan-400/70 to-cyan-600/70 text-white rounded-xl">
                                    언어 / 프레임워크 / 라이브러리
                                </h1>

                                <div className="space-y-4 pl-2">
                                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                                        실무 경험
                                    </h2>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-medium">
                                            능숙하게 사용 가능해요.
                                        </h3>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:javascript"
                                                    width="16"
                                                    height="16"
                                                />
                                                JavaScript
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:typescript-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                TypeScript
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:jquery" width="32" height="24" />
                                                jQuery
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:vue" width="16" height="16" />
                                                Vue.js
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:react" width="16" height="16" />
                                                React
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:html-5" width="16" height="16" />
                                                HTML5
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:css-3" width="16" height="16" />
                                                CSS3
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:element" width="16" height="16" />
                                                Element Plus
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:material-ui"
                                                    width="16"
                                                    height="16"
                                                />
                                                Material UI
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-medium">사용할 줄 알아요.</h3>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:mysql-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                MySQL
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:tailwindcss-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                TailwindCSS
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pl-2">
                                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                                        개인 경험
                                    </h2>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:nextjs-icon" width="16" height="16" />
                                            Next.js
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:c" width="16" height="16" />C
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:unity" width="16" height="16" />
                                            Unity
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:react" width="16" height="16" />
                                            React Native
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:flutter" width="16" height="16" />
                                            Flutter
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center">
                                <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6">
                                <h1 className="inline-block text-xl md:text-3xl font-bold px-3 md:px-4 py-2 mb-6 bg-gradient-to-r from-cyan-700/70 to-cyan-500/70 text-white rounded-xl shadow-md">
                                    도구 / 환경
                                </h1>

                                <div className="space-y-4 pl-2">
                                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                                        실무 경험
                                    </h2>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-medium">
                                            능숙하게 사용 가능해요.
                                        </h3>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:visual-studio-code"
                                                    width="16"
                                                    height="16"
                                                />
                                                vscode
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:cypress-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                Cypress
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:github-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                GitHub
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:bitbucket"
                                                    width="16"
                                                    height="16"
                                                />
                                                Bitbucket
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-medium">사용할 줄 알아요.</h3>

                                        <div className="flex flex-wrap gap-3">
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:eclipse-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                eclipse
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon icon="logos:aws" width="24" height="16" />
                                                AWS
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:storyblocks-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                Storybook
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:docker-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                Docker
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                                <Icon
                                                    icon="logos:gitlab-icon"
                                                    width="16"
                                                    height="16"
                                                />
                                                Gitlab
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pl-2">
                                    <h2 className="text-xl font-semibold text-gray-700 underline underline-offset-4 decoration-wavy">
                                        개인 경험
                                    </h2>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon
                                                icon="logos:firebase-icon"
                                                width="16"
                                                height="16"
                                            />
                                            Firebase
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-800 dark:text-white">
                                            <Icon icon="logos:vercel-icon" width="16" height="16" />
                                            Vercel
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <section className="common-section opacity-0 -translate-x-8 transition-all duration-1200 ease-out">
                        <h2 className="text-2xl font-semibold mb-4">첫 번째 콘텐츠 영역</h2>
                        <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                    </section>

                    <section className="common-section opacity-0 -translate-x-8 transition-all duration-1200 ease-out">
                        <h2 className="text-2xl font-semibold mb-4">두 번째 콘텐츠 영역</h2>
                        <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                    </section>

                    <section className="common-section opacity-0 -translate-x-8 transition-all duration-1200 ease-out">
                        <h2 className="text-2xl font-semibold mb-4">세 번째 콘텐츠 영역</h2>
                        <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                    </section>

                    <section className="common-section opacity-0 -translate-x-8 transition-all duration-1200 ease-out">
                        <h2 className="text-2xl font-semibold mb-4">네 번째 콘텐츠 영역</h2>
                        <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                    </section>
                </>
            )}
        </div>
    );
}
