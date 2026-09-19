'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react';

import { getManAge } from '@/lib/util';

interface ProfileHistoryProps {
    idImgSrc: string | StaticImageData;
}

export default function ProfileCareer({ idImgSrc }: ProfileHistoryProps) {
    const manAge = getManAge('1997.08.19');
    const params = useSearchParams();
    const isAdmin = params.get('isAdmin');

    return (
        <div className="relative w-full px-2 py-12 md:px-8 md:py-16">
            <section className="mx-auto max-w-6xl rounded-[28px] border border-slate-200/80 bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-8">
                <div className="mb-8 md:mb-10">
                    <div className="mb-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500 dark:text-indigo-300">
                            About me
                        </p>
                    </div>
                    <h2 className="text-center text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-indigo-200 dark:to-violet-300">
                            Profile
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="flex-shrink-0 rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-3 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-indigo-950/40">
                        <Image
                            src={idImgSrc}
                            alt="profile image"
                            width={200}
                            height={200}
                            className="h-48 w-48 rounded-[20px] object-cover object-center shadow-md ring-4 ring-white dark:ring-slate-900"
                            style={{ objectPosition: 'center 20%' }}
                        />
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/40">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    📗 이름
                                </span>
                                <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
                                    송현석
                                </p>
                                {isAdmin && (
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                        [본관] 여산송씨 원윤공파 28대손
                                    </p>
                                )}
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/40">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    📅 생년월일
                                </span>
                                <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
                                    1997.08.19 (만 {manAge}세)
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/40">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    🏠 거주지
                                </span>
                                <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
                                    서울특별시 관악구
                                </p>
                                {isAdmin && (
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                        [출신지] 경기도 의정부시
                                    </p>
                                )}
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/40">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    🏫 최종학력
                                </span>
                                <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
                                    세종대학교
                                </p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    [전공] 소프트웨어학
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    [연계전공] 소셜미디어매니지먼트소프트웨어
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                    [학점] 3.62 / 4.5
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/40 md:col-span-2">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    💂🏼 병역사항
                                </span>
                                <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl">
                                    병역필 (병장 만기전역)
                                </p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    대한민국 공군 병 제778기
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-6xl rounded-[28px] border border-slate-200/80 bg-white/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60 md:p-8">
                <div className="mb-8 md:mb-10">
                    <div className="mb-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500 dark:text-indigo-300">
                            Experience
                        </p>
                    </div>
                    <h2 className="text-center text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-indigo-200 dark:to-violet-300">
                            Career
                        </span>
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-slate-50 p-5 shadow-[0_12px_30px_rgba(124,58,237,0.08)] dark:border-violet-900/70 dark:from-violet-950/30 dark:via-slate-900 dark:to-slate-900 md:p-6">
                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                            <h3 className="cursor-not-allowed text-lg font-bold text-slate-800 dark:text-white md:text-xl">
                                주식회사본도
                            </h3>
                            <span className="inline-flex w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800 dark:bg-violet-900/60 dark:text-violet-200 md:text-sm">
                                Career 3 (Now)
                            </span>
                        </div>
                        <div className="mb-4 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                            <p>[기간] 2023.05 ~</p>
                            <p>[부서] (삼성화재) 착UI운영팀</p>
                            <p>[직급] 대리</p>
                            <p>[직무] 프론트엔드 개발</p>
                            <p>[근무형태] 프리랜서</p>
                        </div>
                        <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    삼성화재 다이렉트 자동차 보험 개발 및 운영
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        삼성화재 다이렉트 자동차보험
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 대한민국 다이렉트 자동차 보험 가입 1위, 삼성화재 애니카
                                        다이렉트.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. 자동차 보험 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. 자동차 보험 이벤트 프로세스 개발 및 유지 보수
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    삼성화재 인천공항 해외여행 가입 서비스 '엔젤스' 개발 및 운영
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        삼성화재 인천공항 해외여행 가입 서비스, '엔젤스'
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 인천공항 삼성화재 전용 창구에서 제공하는 해외여행 가입
                                        서비스.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. '엔젤스' 메인 서비스 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    삼성화재라운지 '착!한펫' 서비스 개편
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        삼성화재라운지, 착!한생활 시리즈의 반려동물 케어 서비스
                                        '착!한펫'
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 펫 커뮤니티 '오모오모' 서비스 종료에 따라, '오모오모'의
                                        기능을 탑재하여 새롭게 태어난 삼성화재 착!한생활 시리즈의
                                        반려동물 케어 서비스.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. 사내 관리자 페이지 UI 신규 개발
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. '착!한펫' 앱(웹뷰) 메인 서비스 신규 개발
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    삼성화재 펫 커뮤니티 '오모오모' 개발 및 운영
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        캐릭터로 즐기는 펫 커뮤니티, 오모오모
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 온라인 유저들과 소통하고 즐기는 동물 캐릭터를 활용한
                                        커뮤니티 플랫폼.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. 사내 관리자 페이지 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. '오모오모' 앱(웹뷰) 메인 서비스 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:javascript" width="16" height="16" />
                                JavaScript
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:typescript-icon" width="16" height="16" />
                                TypeScript
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:jquery" width="28" height="20" />
                                jQuery
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:vue" width="16" height="16" />
                                Vue.js
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:react" width="16" height="16" />
                                React
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:html-5" width="16" height="16" />
                                HTML5
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:css-3" width="16" height="16" />
                                CSS3
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:element" width="16" height="16" />
                                Element Plus
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                vscode
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:cypress-icon" width="16" height="16" />
                                Cypress
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:github-icon" width="16" height="16" />
                                GitHub
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:bitbucket" width="16" height="16" />
                                Bitbucket
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:eclipse-icon" width="16" height="16" />
                                eclipse
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:aws" width="22" height="16" />
                                AWS
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:storyblocks-icon" width="16" height="16" />
                                Storybook
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-[0_12px_30px_rgba(16,185,129,0.08)] dark:border-emerald-900/70 dark:from-emerald-950/30 dark:via-slate-900 dark:to-slate-900 md:p-6">
                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                            <Link
                                href="https://www.myrocompany.com"
                                target="_blank"
                                className="text-lg font-bold text-slate-800 transition-colors hover:text-indigo-500 dark:text-white md:text-xl"
                            >
                                (주)미로
                            </Link>
                            <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 md:text-sm">
                                Career 2
                            </span>
                        </div>
                        <div className="mb-4 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                            <p>[기간] 2022.05 ~ 2023.02</p>
                            <p>[부서] 개발팀</p>
                            <p>[직급] 사원</p>
                            <p>[직무] 프론트엔드 개발</p>
                            <p>[근무형태] 정규직</p>
                        </div>

                        <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    '라스트오더' 메인 서비스, SCM, 브랜드 사이트 등 대고객 플랫폼
                                    개발 및 운영
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        우리동네 마감할인 플랫폼, 라스트오더
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 소비 기한이 임박한 상품을 온라인/오프라인으로 구매할 수
                                        있게 돕는 이커머스 플랫폼.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. '라스트오더' 웹/앱(웹뷰) 메인 서비스 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. SCM(공급망 관리 서비스) 플랫폼 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        3. 브랜드 사이트 관리
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    '라스트오더' BackOffice, FMS, 개발 가이드 등 사내 플랫폼 개발 및
                                    운영
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        우리동네 마감할인 플랫폼, 라스트오더
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 소비 기한이 임박한 상품을 온라인/오프라인으로 구매할 수
                                        있게 돕는 이커머스 플랫폼.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. BackOffice(백오피스) 플랫폼 UI 신규 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. FMS(프랜차이즈 관리 서비스) 플랫폼 UI 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        3. 개발 가이드 사이트 관리
                                    </h5>
                                </div>
                                <div className="text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        4. 개발 환경 DB 테스트 데이터 관리 및 운영
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:javascript" width="16" height="16" />
                                JavaScript
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:vue" width="16" height="16" />
                                Vue.js
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:html-5" width="16" height="16" />
                                HTML5
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:css-3" width="16" height="16" />
                                CSS3
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:element" width="16" height="16" />
                                Element Plus
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                vscode
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:github-icon" width="16" height="16" />
                                GitHub
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:aws" width="22" height="16" />
                                AWS
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-5 shadow-[0_12px_30px_rgba(14,165,233,0.08)] dark:border-sky-900/70 dark:from-sky-950/30 dark:via-slate-900 dark:to-slate-900 md:p-6">
                        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                            <Link
                                href="https://www.deepnoid.com"
                                target="_blank"
                                className="text-lg font-bold text-slate-800 transition-colors hover:text-indigo-500 dark:text-white md:text-xl"
                            >
                                (주)딥노이드
                            </Link>
                            <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-sky-900/60 dark:text-sky-200 md:text-sm">
                                Career 1
                            </span>
                        </div>
                        <div className="mb-4 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                            <p>[기간] 2021.08 ~ 2022.04</p>
                            <p>[부서] 웹영상팀</p>
                            <p>[직급] 주임연구원</p>
                            <p>[직무] 프론트엔드 개발</p>
                            <p>[근무형태] 정규직</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-950/40">
                            <div className="mb-6">
                                <h4 className="mb-2 text-sm font-bold text-slate-800 dark:text-white md:text-base">
                                    'CODiPAI' 의료 데이터 라벨링 플랫폼 신규 개발
                                </h4>
                                <span className="text-xs md:text-sm">
                                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                                        의료 데이터 라벨링 플랫폼, DEEP:LABEL
                                    </p>
                                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                                        : 병리 데이터 생성에 있어, 디지털화 및 표준화를 돕는 라벨링
                                        플랫폼.
                                    </p>
                                </span>
                            </div>

                            <div>
                                <div className="mb-2 text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        1. 'DEEP:LABEL' 플랫폼 UI 신규 개발 및 유지 보수
                                    </h5>
                                </div>
                                <div className="text-xs md:text-sm">
                                    <h5 className="font-semibold text-slate-700 dark:text-slate-200">
                                        2. 프로젝트 기획 및 일정 관리
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2 md:gap-3">
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:javascript" width="16" height="16" />
                                JavaScript
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:vue" width="16" height="16" />
                                Vue.js
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:html-5" width="16" height="16" />
                                HTML5
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:css-3" width="16" height="16" />
                                CSS3
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:element" width="16" height="16" />
                                Element Plus
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                vscode
                            </span>
                            <span className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white md:text-sm">
                                <Icon icon="logos:docker-icon" width="16" height="16" />
                                Docker
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
