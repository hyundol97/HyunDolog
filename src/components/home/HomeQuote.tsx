import { useState, useEffect } from 'react';
import { Quote } from '@/data/quotes';

export default function HomeQuote() {
    const [quoteContents, setQuoteContents] = useState<Quote[]>([]);

    const getQuoteContents = async () => {
        try {
            const response = await fetch('/api/quote', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const data = await response.json();
                setQuoteContents(data);
            }
        } catch (error) {
            console.error('Failed to fetch quote:', error);
        }
    };

    useEffect(() => {
        getQuoteContents();
    }, []);

    // 데이터가 비어있을 경우, 노출할 노멀 데이터.
    if (quoteContents.length === 0) {
        const normalData = [
            {
                id: 1,
                original: '子曰 知之者不如好之者 好之者不如樂之者',
                korean: '공자께서 말씀하셨다. 아는 자는 좋아하는 자만 못하고, 좋아하는 자는 즐기는 자만 못하다.',
                author: '공자『논어』中',
            },
            {
                id: 2,
                original: 'Try not to become a man of success but rather to become a man of value.',
                korean: '성공한 사람보다는 가치 있는 사람이 되라.',
                author: '알버트 아인슈타인',
            },
            {
                id: 3,
                original:
                    'Everyone thinks of changing the world, but no one thinks of changing himself.',
                korean: '모두가 세상을 변화시키려고 생각하지만, 정작 스스로 변하겠다고 생각하는 사람은 없다.',
                author: '레프 톨스토이',
            },
        ];

        setQuoteContents(normalData);
    }

    return (
        <div className="relative p-6 md:p-12 border rounded-xl shadow-sm">
            <span className="absolute -top-7 left-6 md:left-12 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full bg-stone-800 text-white dark:bg-white dark:text-stone-800">
                오늘의 명언
            </span>

            <div className="grid gap-y-3">
                {quoteContents.map(quote => (
                    <span key={quote.id} className="text-lg md:text-2xl p-1">
                        <p className="italic text-stone-500 text-sm md:text-base">
                            {quote.original}
                        </p>
                        <p className="text-base md:text-xl">"{quote.korean}"</p>
                        <p className="text-sm md:text-lg">({quote.author})</p>
                    </span>
                ))}
            </div>
        </div>
    );
}
