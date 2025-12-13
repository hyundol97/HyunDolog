import Link from 'next/link';
import Image from 'next/image';
import WeatherWidget from '@/components/common/WeatherWidget';

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center bg-gray-200 dark:bg-stone-900">
            <div className="absolute top-4 right-4 z-10">
                <WeatherWidget />
            </div>

            <div className="relative fixed top-0 flex flex-col items-center px-4 py-4">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center bg-white mb-3">
                    <Link href="/">
                        <Image
                            src="/main_logo.png"
                            alt="Main logo"
                            width={150}
                            height={150}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </Link>
                </div>

                <div className="flex gap-x-12 text-md md:text-lg font-medium px-4 py-2">
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
            </div>
        </nav>
    );
}
