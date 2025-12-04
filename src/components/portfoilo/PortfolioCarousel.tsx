'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Icon } from '@iconify/react';

import IFrameWrapper from '@/components/common/IFrameWrapper';

import PortfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';

interface PortfolioItem {
    id: number;
    title: string;
    image: string | StaticImageData;
    description: string;
    url: string;
    githubUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: '청정듀오 홈페이지',
        image: PortfolioChungchungduoImage,
        description:
            '경기도 의정부시를 기반으로 하는 청소 전문업체 청정듀오 홈페이지를 제작 및 운영하고 있습니다. 2025.05.29 부터 배포되어 현재까지 운영되고 있으며, Creative Tim의 무료 Template 기반으로 제작된 React 프로젝트 입니다. UI 프레임워크로는 Material UI가 활용되었으며, 서버 호스팅은 Firebase Hosting 서비스를 이용하였고 가비아에서 구매한 도메인에 연결하였습니다.',
        url: 'https://www.chungjungduo.com',
        githubUrl: 'https://github.com/hyundol97/chungjungduo-home',
    },
    {
        id: 2,
        title: 'N/A',
        image: '/sub_logo.png',
        description: '',
        url: '',
    },
    {
        id: 3,
        title: 'N/A',
        image: '/sub_logo.png',
        description: '',
        url: '',
    },
];

export default function PortfolioCarousel() {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % portfolioItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };

    const openIFrame = (item: PortfolioItem) => {
        if (item.url) {
            setSelectedItem(item);
        } else {
            alert('Not Available');
        }
    };

    return (
        <div>
            {/* Carousel */}
            <div className="relative mb-8">
                <div className="overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {portfolioItems.map(item => (
                            <div key={item.id} className="w-full flex-shrink-0">
                                <div
                                    className="relative h-80 sm:h-[500px] cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => openIFrame(item)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                    <Icon icon="ri:arrow-left-s-line" width="24" height="24" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                    <Icon icon="ri:arrow-right-s-line" width="24" height="24" />
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8 w-[90%] mx-auto">
                <h2 className="text-lg md:text-2xl font-bold mb-4">
                    {portfolioItems[currentIndex].title}
                </h2>
                <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {portfolioItems[currentIndex].description !== ''
                        ? portfolioItems[currentIndex].description
                        : 'N/A'}
                </p>
            </div>

            <IFrameWrapper
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                projectUrl={selectedItem?.url || ''}
                projectTitle={selectedItem?.title || ''}
                githubUrl={selectedItem?.githubUrl}
            />
        </div>
    );
}
