'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Masonry from 'react-masonry-css';

import TravelFrance1 from '@/assets/images/travel_france1.jpg';
import TravelFrance2 from '@/assets/images/travel_france2.jpg';
import TravelFrance3 from '@/assets/images/travel_france3.jpg';
import TravelFrance4 from '@/assets/images/travel_france4.jpg';
import TravelItaly1 from '@/assets/images/travel_italy1.jpg';
import TravelItaly2 from '@/assets/images/travel_italy2.jpg';
import TravelItaly3 from '@/assets/images/travel_italy3.jpg';
import TravelItaly4 from '@/assets/images/travel_italy4.jpg';
import TravelItaly5 from '@/assets/images/travel_italy5.jpg';
import TravelItaly6 from '@/assets/images/travel_italy6.jpg';
import TravelItaly7 from '@/assets/images/travel_italy7.jpg';
import TravelSwiss1 from '@/assets/images/travel_swiss1.jpg';
import TravelSwiss2 from '@/assets/images/travel_swiss2.jpg';
import TravelSwiss3 from '@/assets/images/travel_swiss3.jpg';
import TravelSwiss4 from '@/assets/images/travel_swiss4.jpg';
import TravelSwiss5 from '@/assets/images/travel_swiss5.jpg';
import TravelSwiss6 from '@/assets/images/travel_swiss6.jpg';
import TravelFukuoka from '@/assets/images/interest_travel_fukuoka1.jpg';
import TravelRoma from '@/assets/images/interest_travel_roma1.jpg';
import SportsHike from '@/assets/images/interest_sports_hike1.jpg';
import ReadingBook from '@/assets/images/interest_reading_book1.jpg';

type Category = '전체' | '여행' | '운동' | '독서';

interface InterestItem {
    id: number;
    category: Category;
    image: string | StaticImageData;
    title: string;
    description?: string;
}

const interestItems: InterestItem[] = [
    { id: 1, category: '여행', image: TravelFrance1, title: '프랑스 여행' },
    { id: 2, category: '여행', image: TravelFrance2, title: '프랑스 여행' },
    { id: 3, category: '여행', image: TravelFrance3, title: '프랑스 여행' },
    { id: 4, category: '여행', image: TravelFrance4, title: '프랑스 여행' },
    { id: 5, category: '여행', image: TravelItaly1, title: '이탈리아 여행' },
    { id: 6, category: '여행', image: TravelItaly2, title: '이탈리아 여행' },
    { id: 7, category: '여행', image: TravelItaly3, title: '이탈리아 여행' },
    { id: 8, category: '여행', image: TravelItaly4, title: '이탈리아 여행' },
    { id: 9, category: '여행', image: TravelItaly5, title: '이탈리아 여행' },
    { id: 10, category: '여행', image: TravelItaly6, title: '이탈리아 여행' },
    { id: 11, category: '여행', image: TravelItaly7, title: '이탈리아 여행' },
    { id: 12, category: '여행', image: TravelSwiss1, title: '스위스 여행' },
    { id: 13, category: '여행', image: TravelSwiss2, title: '스위스 여행' },
    { id: 14, category: '여행', image: TravelSwiss3, title: '스위스 여행' },
    { id: 15, category: '여행', image: TravelSwiss4, title: '스위스 여행' },
    { id: 16, category: '여행', image: TravelSwiss5, title: '스위스 여행' },
    { id: 17, category: '여행', image: TravelSwiss6, title: '스위스 여행' },
    { id: 18, category: '여행', image: TravelFukuoka, title: '후쿠오카 여행' },
    { id: 19, category: '여행', image: TravelRoma, title: '로마 여행' },
    { id: 20, category: '운동', image: SportsHike, title: '등산' },
    { id: 21, category: '독서', image: ReadingBook, title: '독서' },
];

export default function InterestMasonry() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
    const [filteredItems, setFilteredItems] = useState<InterestItem[]>(interestItems);
    const [selectedItem, setSelectedItem] = useState<InterestItem | null>(null);

    const categories: Category[] = ['전체', '여행', '운동', '독서'];

    useEffect(() => {
        if (selectedCategory === '전체') {
            setFilteredItems(interestItems);
        } else {
            setFilteredItems(interestItems.filter(item => item.category === selectedCategory));
        }
    }, [selectedCategory]);

    useEffect(() => {
        document.body.style.overflow = selectedItem ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedItem]);

    const breakpointColumns = {
        default: 3,
        1024: 2,
        640: 1,
    };

    return (
        <div>
            {/* Category filter */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`cursor-pointer px-6 py-2 rounded-full transition-all ${
                            selectedCategory === category
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <Masonry
                breakpointCols={breakpointColumns}
                className="flex gap-4"
                columnClassName="masonry-column"
            >
                {filteredItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="mb-4 break-inside-avoid cursor-pointer group animate-fadeIn"
                        style={{ animationDelay: `${index * 0.05}s` }}
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] m-auto w-95 md:w-90">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 transition-all duration-300 flex items-end p-4">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="font-semibold text-lg">{item.title}</p>
                                    <p className="text-sm">{item.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>

            {/* Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center overflow-hidden"
                    onClick={() => setSelectedItem(null)}
                >
                    <button
                        onClick={() => setSelectedItem(null)}
                        className="cursor-pointer absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
                    >
                        ✕
                    </button>
                    <Image
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        className="object-contain p-4"
                    />
                </div>
            )}
        </div>
    );
}
