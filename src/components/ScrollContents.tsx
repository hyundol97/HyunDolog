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

                    <section className="text-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="grid gap-y-3 p-12">
                            <span className="text-2xl p-1">
                                <p className="italic text-stone-500">
                                    子曰 知之者不如好之者 好之者不如樂之者
                                </p>
                                <p>
                                    “공자께서 말씀하셨다. 아는 자는 좋아하는 자만 못하고, 좋아하는
                                    자는 즐기는 자만 못하다.”
                                </p>
                                <p className="text-lg">(공자『논어』中)</p>
                            </span>
                            <span className="text-2xl p-1">
                                <p className="italic text-stone-500">
                                    Try not to become a man of success but rather to become a man of
                                    value.
                                </p>
                                <p>“성공한 사람보다는 가치 있는 사람이 되라.”</p>
                                <p className="text-lg">(알버트 아인슈타인)</p>
                            </span>
                            <p className="text-2xl mt-12 p-1"></p>
                        </div>
                    </section>

                    <section className="common-section p-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex gap-x-12">
                            <div className="w-2/5 flex flex-col">
                                <h2 className="text-3xl font-semibold mb-6">Profile</h2>

                                <div className="grid gap-y-2 text-lg">
                                    <Image
                                        src="/home_profile_personal.jpg"
                                        alt="home profile personal image"
                                        width={150}
                                        height={150}
                                        className="object-cover rounded-full w-48 h-48 m-auto mb-3"
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

                                <div className="rounded-xl mt-auto text-center">
                                    <Link href="/profile">
                                        <button
                                            type="button"
                                            className="cursor-pointer p-6 w-3/5 bg-indigo-600 font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                        >
                                            Profile 페이지로 이동하기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-3/5 rounded-xl overflow-hidden aspect-square">
                                <Image
                                    src="/profile.jpg"
                                    alt="home profile image"
                                    width={400}
                                    height={400}
                                    className="object-cover rounded-xl w-full h-full grayscale-[0.75]"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div className="flex gap-6 p-12">
                            <div className="w-1/2">
                                <Image
                                    src="/portfolio.jpg"
                                    alt="home portfolio image"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-80"
                                />
                                <div className="mt-3">
                                    <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
                                    <div className="rounded-xl mt-auto text-center">
                                        <Link href="/portfolio">
                                            <button
                                                type="button"
                                                className="cursor-pointer p-8 w-3/5 bg-indigo-600 font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                            >
                                                Portfolio 페이지로 이동하기
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2">
                                <Image
                                    src="/interest.jpg"
                                    alt="home interest image"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-80"
                                />
                                <div className="mt-3">
                                    <h2 className="text-2xl font-semibold mb-6">Interest</h2>
                                    <div className="rounded-xl mt-auto text-center">
                                        <Link href="/interest">
                                            <button
                                                type="button"
                                                className="cursor-pointer p-8 w-3/5 bg-indigo-600 font-semibold rounded-xl transition-all duration-200 ease-out hover:bg-indigo-700 hover:shadow-lg hover:scale-[1.05] active:scale-[0.95]"
                                            >
                                                Interest 페이지로 이동하기
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="common-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                        <div>
                            <h2>
                                “천재는 노력하는 사람을 이길 수 없고, 노력하는 사람은 즐기는 사람을
                                이길 수 없다.”
                            </h2>
                            <p>
                                공자의 『논어』에 등장하는 이 구절은 저의 삶을 대하는 태도와 닮아
                                있습니다.
                            </p>
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
