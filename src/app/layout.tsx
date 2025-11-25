import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'HyunDolog',
    description: '송현석의 개발 블로그 - 프론트엔드 개발자의 기술 블로그입니다.',
    openGraph: {
        title: 'HyunDolog',
        description: '송현석의 개발 블로그 - 프론트엔드 개발자의 기술 블로그입니다.',
        images: ['/main_logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HyunDolog',
        description: '송현석의 개발 블로그 - 프론트엔드 개발자의 기술 블로그입니다.',
        images: ['/main_logo.png'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <header>
                    <Navbar />
                </header>

                <main className="min-h-screen w-full bg-white dark:bg-black flex justify-center">
                    {children}
                </main>

                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
