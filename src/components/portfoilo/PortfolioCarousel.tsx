'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import IFrameWrapper from '@/components/common/IFrameWrapper';

import PortfolioChungchungduoImage from '@/assets/images/portfolio_chungjungduo_logo.png';

interface PortfolioItem {
    id: number;
    title: string;
    image: string | StaticImageData;
    description: string;
    url: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: '청정듀오 홈페이지',
        image: PortfolioChungchungduoImage,
        description:
            '경기도 의정부시를 기반으로 하는 청소 전문업체 청정듀오 홈페이지 제작 및 운영.',
        url: 'https://www.chungjungduo.com',
    },
    {
        id: 2,
        title: '',
        image: '/sub_logo.png',
        description: '',
        url: 'https://www.chungjungduo.com',
    },
    {
        id: 3,
        title: '',
        image: '/sub_logo.png',
        description: '',
        url: 'https://www.chungjungduo.com',
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
                                    onClick={() => setSelectedItem(item)}
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
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                    →
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
            {portfolioItems[currentIndex].description && (
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8 w-[90%] mx-auto">
                    <h2 className="text-lg md:text-2xl font-bold mb-4">
                        {portfolioItems[currentIndex].title}
                    </h2>
                    <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {portfolioItems[currentIndex].description}
                    </p>
                </div>
            )}

            <IFrameWrapper
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                projectUrl={selectedItem?.url || ''}
                projectTitle={selectedItem?.title || ''}
            />
        </div>
    );
}
