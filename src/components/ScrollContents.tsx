'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CommonLottie from '@/components/CommonLottie';
import Accordion from '@/components/Accordion';
import homeLottie from '@/assets/images/home_lottie.json';

interface ScollContentsProps {
    pageName: string;
    effectDirection?: string;
}

export default function ScrollContents({ pageName, effectDirection = 'y' }: ScollContentsProps) {
    const careerStartDay = new Date('2022-08-09T00:00:00+09:00'); // 사회경험 시작일
    const today = new Date();
    const diffMs = today.getTime() - careerStartDay.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // 여러번 연산할거 아니니까 메모이제이션 같은 것 안쓰는 것으로..

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
                rootMargin: '-25% 0px -25% 0px',
                threshold: 0.5,
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
                        <div className="flex flex-col items-center">
                            <CommonLottie file={homeLottie} />
                            <span className="mt-4 text-center subpixel-antialiased text-3xl animate-[bounce_1.5s_infinite]">
                                <p className="text-3xl p-1">안녕하세요 👋</p>
                                <p className="text-3xl p-1">HyunDolog에 오신 것을 환영합니다!</p>
                                <p className="text-lg p-2">본 페이지는 Next.js로 제작되었습니다.</p>
                            </span>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex">
                            <div className="mr-4 w-2/5 flex flex-col">
                                <h2 className="text-3xl font-semibold mb-6">Profile</h2>

                                <div className="grid gap-y-1 text-lg">
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
                                        <p className="text-sm pl-2 content-center">+{diffDays}일</p>
                                    </div>
                                </div>

                                <div className="rounded-xl mt-auto text-center">
                                    <Link href="/profile">
                                        <button
                                            type="button"
                                            className="cursor-pointer p-8 w-3/5 bg-indigo-600 font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                        >
                                            Profile 페이지로 이동하기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-3/5">
                                <Image
                                    src="/profile.jpg"
                                    alt="home profile image"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex">
                            <div className="w-3/5">
                                <Image
                                    src="/portfolio.jpg"
                                    alt="home portfolio image"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="ml-4 w-2/5">
                                <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
                                <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex">
                            <div className="mr-4 w-2/5">
                                <h2 className="text-2xl font-semibold mb-6">Interest</h2>
                                <p>여기에 설명, 이미지, 카드 등 원하는 콘텐츠 배치 가능</p>
                            </div>
                            <div className="w-3/5">
                                <Image
                                    src="/interest.jpg"
                                    alt="home interest image"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
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
