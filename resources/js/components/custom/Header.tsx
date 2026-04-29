import { Link } from '@inertiajs/react';
import { useState } from 'react';

export function AppHeader() {
    const [isActive, setActive] = useState(false);

    return (
        <header className="sticky top-0 z-50 h-13 shrink-0 w-full border-b border-zinc-800 bg-[#0D0D0D]">
            <div className="flex h-full items-stretch justify-between">
                <div className="h-full space-x-6 pl-4">
                    <Link className="text-[18px]" href="#">
                        Home
                    </Link>
                    <button
                        onClick={() => setActive(!isActive)}
                        className="h-full px-2 text-[18px] active:bg-blue-600"
                    >
                        Posts
                    </button>
                    <Link className="text-[18px]" href="#">
                        About
                    </Link>
                    <Link className="text-[18px]" href="#">
                        Ad
                    </Link>
                </div>
                <div className="flex items-stretch">
                    <div className="flex cursor-pointer items-center px-4 text-zinc-400 hover:text-white">
                        <Link href="#">Profile</Link>
                    </div>

                    <input
                        placeholder="find more..."
                        className="w-64 border-l border-zinc-800 bg-[#202020] px-6 text-white transition-all outline-none focus:bg-[#252525]"
                    />
                </div>
            </div>
            {/*TODO  сделать в будущем вывод постов юзера*/}
            {isActive && (
                <div className="absolute top-full left-24 z-50 grid w-48 space-y-2 rounded-b-md border border-zinc-800 bg-[#151515] px-3 py-2 shadow-xl">
                    <Link href="#">hi!</Link>
                    <Link href="#">hi!</Link>
                    <Link href="#">hi!</Link>
                </div>
            )}
        </header>
    );
}
