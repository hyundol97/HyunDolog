import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center font-sans bg-gray-200 dark:bg-stone-900">
            <div className="relative fixed top-0 flex flex-col items-center px-4 py-4">
                <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white mb-3">
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

                <div className="flex gap-x-12 text-lg font-medium px-4 py-2">
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
