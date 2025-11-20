import Link from 'next/link';
import { Icon } from '@iconify/react';
import { getVersion } from '@/lib/version';

export default async function Footer() {
    const version = await getVersion();

    return (
        <div className="w-full bg-gray-200 dark:bg-stone-900">
            <div className="max-w-6xl mx-auto p-12">
                {/* <div className="flex flex-col items-center mb-3">
                    <Link
                        href="/"
                        className="flex flex-col items-center hover:text-indigo-300 transition-colors"
                    >
                        <Icon icon="ri:home-2-line" width="48" height="48" />
                        <p>Home</p>
                    </Link>
                </div> */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-12 text-lg font-medium p-6">
                        <Link
                            href="/profile"
                            className="flex flex-col items-center hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:account-box-line" width="32" height="32" />
                            <p className="text-sm">Profile</p>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="flex flex-col items-center hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:computer-line" width="32" height="32" />
                            <p className="text-sm">Portfoilo</p>
                        </Link>
                        <Link
                            href="/interest"
                            className="flex flex-col items-center hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:bear-smile-line" width="32" height="32" />
                            <p className="text-sm">Interest</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-12 text-lg font-medium p-6">
                        <Link
                            href="https://www.instagram.com/hyundol_97"
                            target="_blank"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:instagram-line" width="24" height="24" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/hyundol_97"
                            target="_blank"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:kakao-talk-fill" width="24" height="24" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EC%86%A1-3311a6254"
                            target="_blank"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:linkedin-box-fill" width="24" height="24" />
                        </Link>
                        <Link
                            href="https://hyundolog.tistory.com"
                            target="_blank"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:blogger-line" width="24" height="24" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/%ED%98%84%EC%84%9D-%EC%86%A1-3311a6254"
                            target="_blank"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            <Icon icon="ri:mail-add-line" width="24" height="24" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <p>All rights reserved. Copyright © 2025 hyundol97.</p>
                    <p>Version {version}.</p>
                </div>
            </div>
        </div>
    );
}
