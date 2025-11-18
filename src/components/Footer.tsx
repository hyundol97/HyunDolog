import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full bg-gray-200 dark:bg-stone-900">
            <div className="max-w-6xl mx-auto p-12">
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-12 text-lg font-medium p-6">
                        <Link href="/profile" className="hover:text-indigo-300 transition-colors">
                            <i>프로필 아이콘</i>
                        </Link>
                        <Link href="/portfolio" className="hover:text-indigo-300 transition-colors">
                            <i>포트폴리오 아이콘</i>
                        </Link>
                        <Link href="/interest" className="hover:text-indigo-300 transition-colors">
                            <i>취미 아이콘</i>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-12 text-lg font-medium px-4 py-2">
                        <Link
                            href="https://www.instagram.com/hyundol_97"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <i>인스타그램 아이콘</i>
                        </Link>
                        <Link
                            href="https://www.instagram.com/hyundol_97"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <i>카카오톡 아이콘</i>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EC%86%A1-3311a6254"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <i>링크드인 아이콘</i>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EC%86%A1-3311a6254"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <i>링크드인 아이콘</i>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EC%86%A1-3311a6254"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <i>링크드인 아이콘</i>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <p>All rights reserved. Copyright © 2025 hyundol97.</p>
                    <p>Version xxx.</p>
                </div>
            </div>
        </div>
    );
}
