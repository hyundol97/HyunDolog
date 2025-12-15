import { StaticImageData } from 'next/image';

import TravelFrance1 from '@/assets/images/interest/travel_france1.jpg';
import TravelFrance2 from '@/assets/images/interest/travel_france2.jpg';
import TravelFrance3 from '@/assets/images/interest/travel_france3.jpg';
import TravelFrance4 from '@/assets/images/interest/travel_france4.jpg';
import TravelItaly1 from '@/assets/images/interest/travel_italy1.jpg';
import TravelItaly2 from '@/assets/images/interest/travel_italy2.jpg';
import TravelItaly3 from '@/assets/images/interest/travel_italy3.jpg';
import TravelItaly4 from '@/assets/images/interest/travel_italy4.jpg';
import TravelItaly5 from '@/assets/images/interest/travel_italy5.jpg';
import TravelItaly6 from '@/assets/images/interest/travel_italy6.jpg';
import TravelItaly7 from '@/assets/images/interest/travel_italy7.jpg';
import TravelSwiss1 from '@/assets/images/interest/travel_swiss1.jpg';
import TravelSwiss2 from '@/assets/images/interest/travel_swiss2.jpg';
import TravelSwiss3 from '@/assets/images/interest/travel_swiss3.jpg';
import TravelSwiss4 from '@/assets/images/interest/travel_swiss4.jpg';
import TravelSwiss5 from '@/assets/images/interest/travel_swiss5.jpg';
import TravelSwiss6 from '@/assets/images/interest/travel_swiss6.jpg';
import TravelFukuoka from '@/assets/images/interest/interest_travel_fukuoka1.jpg';
import TravelRoma from '@/assets/images/interest/interest_travel_roma1.jpg';
import SportsHike from '@/assets/images/interest/interest_sports_hike1.jpg';
import ReadingBook from '@/assets/images/interest/interest_reading_book1.jpg';

export type Category = '전체' | '여행' | '운동' | '독서';

export interface InterestItem {
    id: number;
    category: Category;
    image: string | StaticImageData;
    title: string;
    description?: string;
}

export const interestItems: InterestItem[] = [
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
