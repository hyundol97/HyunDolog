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
        <div className="relative w-full px-2 md:px-[10] py-20">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 bg-gray-300 dark:bg-stone-800">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                        Profile
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                            <Image
                                src={idImgSrc}
                                alt="profile image"
                                width={200}
                                height={200}
                                className="object-cover w-48 h-48 rounded-full border-4 border-gray-200"
                                style={{ objectPosition: 'center 20%' }}
                            />
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                    <span className="text-sm md:text-lg text-gray-600 font-medium">
                                        📗 이름
                                    </span>
                                    <p className="text-md md:text-xl font-semibold">송현석</p>
                                    {isAdmin && (
                                        <p className="text-sm md:text-md">
                                            [본관] 여산송씨 원윤공파 28대손
                                        </p>
                                    )}
                                </div>
                                <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                    <span className="text-sm md:text-lg text-gray-600 font-medium">
                                        📅 생년월일
                                    </span>
                                    <p className="text-md md:text-xl font-semibold">
                                        1997.08.19 (만 {manAge}세)
                                    </p>
                                </div>
                                <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                    <span className="text-sm md:text-lg text-gray-600 font-medium">
                                        🏠 거주지
                                    </span>
                                    <p className="text-md md:text-xl font-semibold">
                                        서울특별시 관악구
                                    </p>
                                    {isAdmin && (
                                        <p className="text-sm md:text-md">
                                            [출신지] 경기도 의정부시
                                        </p>
                                    )}
                                </div>
                                <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                    <span className="text-sm md:text-lg text-gray-600 font-medium">
                                        🏫 최종학력
                                    </span>
                                    <p className="text-md md:text-xl font-semibold">세종대학교</p>
                                    <p className="text-sm md:text-md">[전공] 소프트웨어학</p>
                                    <p className="text-sm md:text-md">
                                        [연계전공] 소셜미디어매니지먼트소프트웨어
                                    </p>
                                    <p className="text-sm md:text-md">[학점] 3.62 / 4.5</p>
                                </div>
                                <div className="bg-gray-300 dark:bg-stone-800 p-4 rounded-lg">
                                    <span className="text-sm md:text-lg text-gray-600 font-medium">
                                        💂🏼 병역사항
                                    </span>
                                    <p className="text-md md:text-xl font-semibold">
                                        병역필 (병장 만기전역)
                                    </p>
                                    <p className="text-sm md:text-md">대한민국 공군 병 제778기</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="marginTop-100">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                        Career
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="cursor-not-allowed text-md md:text-xl font-bold text-gray-800 dark:text-white">
                                    주식회사본도
                                </h3>
                                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                    Career 3 (Now)
                                </span>
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
                                <p>[기간] 2023.05 ~</p>
                                <p>[부서] (삼성화재) 착UI운영팀</p>
                                <p>[직급] 대리</p>
                                <p>[직무] 프론트엔드 개발</p>
                                <p>[근무형태] 프리랜서</p>
                            </div>
                            <div className="mb-4 bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        삼성화재 다이렉트 자동차 보험 개발 및 운영
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            삼성화재 다이렉트 자동차보험
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 대한민국 다이렉트 자동차 보험 가입 1위, 삼성화재
                                            애니카 다이렉트.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. 자동차 보험 UI 개발 및 유지 보수
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. 자동차 보험 이벤트 프로세스 개발 및 유지 보수
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        삼성화재 인천공항 해외여행 가입 서비스 '엔젤스' 개발 및 운영
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            삼성화재 인천공항 해외여행 가입 서비스, '엔젤스'
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 인천공항 삼성화재 전용 창구에서 제공하는 해외여행 가입
                                            서비스.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. '엔젤스' 메인 서비스 UI 개발 및 유지 보수
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        삼성화재라운지 '착!한펫' 서비스 개편
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            삼성화재라운지, 착!한생활 시리즈의 반려동물 케어 서비스
                                            '착!한펫'
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 펫 커뮤니티 '오모오모' 서비스 종료에 따라,
                                            '오모오모'의 기능을 탑재하여 새롭게 태어난 삼성화재
                                            착!한생활 시리즈 의 반려동물 케어 서비스.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. 사내 관리자 페이지 UI 신규 개발
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. '착!한펫' 앱(웹뷰) 메인 서비스 신규 개발
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        삼성화재 펫 커뮤니티 '오모오모' 개발 및 운영
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            캐릭터로 즐기는 펫 커뮤니티, 오모오모
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 온라인 유저들과 소통하고 즐기는 동물 캐릭터를 활용한
                                            커뮤니티 플랫폼. Unity로 제작된 입체감 있는 상호작용부
                                            터, 각종 게시판 및 채팅을 통한 소통을 가능하게 하는
                                            플랫폼.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. 사내 관리자 페이지 UI 개발 및 유지 보수
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. '오모오모' 앱(웹뷰) 메인 서비스 UI 개발 및 유지 보수
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:javascript" width="16" height="16" />
                                    JavaScript
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:typescript-icon" width="16" height="16" />
                                    TypeScript
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:jquery" width="32" height="24" />
                                    jQuery
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:vue" width="16" height="16" />
                                    Vue.js
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:react" width="16" height="16" />
                                    React
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:html-5" width="16" height="16" />
                                    HTML5
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:css-3" width="16" height="16" />
                                    CSS3
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:element" width="16" height="16" />
                                    Element Plus
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                    vscode
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:cypress-icon" width="16" height="16" />
                                    Cypress
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:github-icon" width="16" height="16" />
                                    GitHub
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:bitbucket" width="16" height="16" />
                                    Bitbucket
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:eclipse-icon" width="16" height="16" />
                                    eclipse
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:aws" width="24" height="16" />
                                    AWS
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:storyblocks-icon" width="16" height="16" />
                                    Storybook
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-green-500">
                            <div className="flex justify-between items-start mb-2">
                                <Link
                                    href="https://www.myrocompany.com"
                                    target="_blank"
                                    className="text-md md:text-xl font-bold text-gray-800 dark:text-white hover:text-indigo-300 transition-colors"
                                >
                                    (주)미로
                                </Link>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                    Career 2
                                </span>
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
                                <p>[기간] 2022.05 ~ 2023.02</p>
                                <p>[부서] 개발팀</p>
                                <p>[직급] 사원</p>
                                <p>[직무] 프론트엔드 개발</p>
                                <p>[근무형태] 정규직</p>
                            </div>

                            <div className="mb-4 bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white rounded-lg p-4">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        '라스트오더' 메인 서비스, SCM, 브랜드 사이트 등 대고객
                                        플랫폼 개발 및 운영
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            우리동네 마감할인 플랫폼, 라스트오더
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 소비 기한이 임박한 상품을 온라인/오프라인으로 구매할
                                            수 있게 돕는 주식회사미로의 이커머스 플랫폼. 사용자
                                            주변의 편의점(세븐일레븐) 및 음식점의 마감할인 상품을
                                            거래할 수 있게 하여 환경을 구하도록 하는 플랫폼.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. '라스트오더' 웹/앱(웹뷰) 메인 서비스 UI 개발 및 유지
                                            보수
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. SCM(공급망 관리 서비스) 플랫폼 UI 개발 및 유지 보수
                                        </h5>
                                    </div>
                                    <div className="text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. 브랜드 사이트 관리
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        '라스트오더' BackOffice, FMS, 개발 가이드 등 사내 플랫폼
                                        개발 및 운영
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            우리동네 마감할인 플랫폼, 라스트오더
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 소비 기한이 임박한 상품을 온라인/오프라인으로 구매할
                                            수 있게 돕는 주식회사미로의 이커머스 플랫폼. 사용자
                                            주변의 편의점(세븐일레븐) 및 음식점의 마감할인 상품을
                                            거래할 수 있게 하여 환경을 구하도록 하는 플랫폼.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. BackOffice(백오피스) 플랫폼 UI 신규 개발 및 유지 보수
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. FMS(프랜차이즈 관리 서비스) 플랫폼 UI 개발 및 유지
                                            보수
                                        </h5>
                                    </div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            3. 개발 가이드 사이트 관리
                                        </h5>
                                    </div>
                                    <div className="text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            4. 개발 환경 DB 테스트 데이터 관리 및 운영
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:javascript" width="16" height="16" />
                                    JavaScript
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:vue" width="16" height="16" />
                                    Vue.js
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:html-5" width="16" height="16" />
                                    HTML5
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:css-3" width="16" height="16" />
                                    CSS3
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:element" width="16" height="16" />
                                    Element Plus
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                    vscode
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:github-icon" width="16" height="16" />
                                    GitHub
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:aws" width="24" height="16" />
                                    AWS
                                </span>
                            </div>
                        </div>

                        <div className="bg-gray-200 dark:bg-stone-700 rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                            <div className="flex justify-between items-start mb-2">
                                <Link
                                    href="https://www.deepnoid.com"
                                    target="_blank"
                                    className="text-md md:text-xl font-bold text-gray-800 dark:text-white hover:text-indigo-300 transition-colors"
                                >
                                    (주)딥노이드
                                </Link>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                                    Career 1
                                </span>
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
                                <p>[기간] 2021.08 ~ 2022.04</p>
                                <p>[부서] 웹영상팀</p>
                                <p>[직급] 주임연구원</p>
                                <p>[직무] 프론트엔드 개발</p>
                                <p>[근무형태] 정규직</p>
                            </div>
                            <div className="bg-gray-100 dark:bg-stone-600 text-gray-800 dark:text-white p-4 rounded-lg">
                                <div className="mb-6">
                                    <h4 className="font-bold mb-2">
                                        'CODiPAI' 의료 데이터 라벨링 플랫폼 신규 개발
                                    </h4>
                                    <span className="font-light text-xs md:text-sm">
                                        <p className="font-semibold">
                                            의료 데이터 라벨링 플랫폼, DEEP:LABEL
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            : 병리 데이터 생성에 있어, 디지털화 및 표준화를 돕는
                                            (주)딥노이드의 라벨링 플랫폼. 아날로그 방식으로 작업하던
                                            병리 데이터 생성 업무 과정을 웹 환경에서 진행할 수
                                            있도록 하여, 정해진 이미지 형식 및 절차에 따라
                                            생성하도록 돕는 플랫폼. DEEP:LABEL을 활용하여 빅데이터를
                                            축적하고, 인공지능으로 연구와 진단에 기여할 수 있는 것을
                                            목표로 하는 사업인 CODiPAI에 참여.
                                        </p>
                                    </span>
                                </div>

                                <div>
                                    <div className="mb-2 text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            1. 'DEEP:LABEL' 플랫폼 UI 신규 개발 및 유지 보수
                                        </h5>
                                    </div>
                                    <div className="text-xs md:text-sm">
                                        <h5 className="font-semibold mb-1">
                                            2. 프로젝트 기획 및 일정 관리
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:javascript" width="16" height="16" />
                                    JavaScript
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:vue" width="16" height="16" />
                                    Vue.js
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:html-5" width="16" height="16" />
                                    HTML5
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:css-3" width="16" height="16" />
                                    CSS3
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:element" width="16" height="16" />
                                    Element Plus
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:visual-studio-code" width="16" height="16" />
                                    vscode
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:docker-icon" width="16" height="16" />
                                    Docker
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-stone-800 text-white">
                                    <Icon icon="logos:gitlab-icon" width="16" height="16" />
                                    Gitlab
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
