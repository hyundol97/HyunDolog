'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { interestItems, type Category, type InterestItem } from '@/data/interestData';

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
                                    loading="lazy"
                                    placeholder="blur"
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
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                        <Image
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
                            <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
