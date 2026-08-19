'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

type Category = '전체' | '여행' | '운동' | '독서' | '기타';

interface InterestItem {
    id: number;
    category: string;
    image: string;
}

export default function InterestMasonry() {
    const [items, setItems] = useState<InterestItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
    const [selectedItem, setSelectedItem] = useState<InterestItem | null>(null);

    const categories: Category[] = ['전체', '여행', '운동', '독서'];

    useEffect(() => {
        fetch('/api/images').then(res => res.json()).then(setItems);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedItem ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedItem]);

    const filteredItems = selectedCategory === '전체'
        ? items
        : items.filter(item => item.category === selectedCategory);

    const breakpointColumns = { default: 3, 1024: 2, 640: 1 };

    return (
        <div>
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
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                            <div className="relative w-full aspect-square bg-gray-200 dark:bg-stone-700">
                                <Image
                                    src={item.image}
                                    alt={item.category}
                                    loading="lazy"
                                    fill
                                    className="object-cover transition-opacity duration-500 opacity-0"
                                    onLoad={e => (e.currentTarget.style.opacity = '1')}
                                />
                            </div>
                            <div className="absolute inset-0 transition-all duration-300 flex items-end p-4">
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Masonry>

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
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <Image
                            src={selectedItem.image}
                            alt={selectedItem.category}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
