import { NextResponse } from 'next/server';
import { quotes } from '@/data/quotes';

export async function GET() {
    try {
        const shuffled = [...quotes].sort(() => 0.5 - Math.random());
        const selectedQuotes = shuffled.slice(0, 3);

        return NextResponse.json(selectedQuotes);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get quote' }, { status: 500 });
    }
}
