import Link from 'next/link';
import Image from 'next/image';
import WeatherWidget from '@/components/common/WeatherWidget';

export default function Navbar() {
    return (
        <nav className="bg-gray-200 dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center md:justify-between gap-y-2">
            <Link href="/">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white">
                    <Image
                        src="/main_logo.png"
                        alt="Main logo"
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </Link>

            <div className="flex items-center gap-x-8">
                <div className="flex gap-x-8 text-md md:text-lg font-medium">
                    <Link href="/profile" className="hover:text-indigo-300 transition-colors">
                        Profile
                    </Link>
                    <Link href="/portfolio" className="hover:text-indigo-300 transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/interest" className="hover:text-indigo-300 transition-colors">
                        Interest
                    </Link>
                </div>
                <WeatherWidget />
            </div>
        </div>
        </nav>
    );
}
