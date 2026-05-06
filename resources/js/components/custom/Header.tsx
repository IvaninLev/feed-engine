import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export function AppHeader() {
    const [menus, setMenus] = useState({
        posts: false,
        create: false,
        profile: false,
    });
    const { auth } = usePage().props;

    const toggle = (menu: keyof typeof menus) =>
        setMenus((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));

    const { component } = usePage();
    const isLoginPage = component === 'Auth/Login';

    return (
        <header className="sticky top-0 z-50 h-13 w-full shrink-0 border-b border-zinc-800 bg-[#0D0D0D]">
            <div className="flex h-full items-stretch justify-between">
                <div className="h-full space-x-6 pl-4">
                    <Link className="text-[18px]" href="/">
                        Home
                    </Link>
                    <button
                        onClick={() => toggle('posts')}
                        className="h-full px-2 text-[18px] active:bg-blue-600"
                    >
                        Posts
                    </button>
                    <Link className="text-[18px]" href="#">
                        About
                    </Link>
                    <button
                        onClick={() => toggle('create')}
                        className="h-full px-2 text-[18px] active:bg-blue-600"
                    >
                        Create
                    </button>
                </div>
                <div className="flex items-stretch">
                    {auth.user && (
                        <button
                            onClick={() => toggle('profile')}
                            className="h-full px-2 text-[18px] active:bg-blue-600"
                        >
                            Profile
                        </button>
                    )}

                    {!isLoginPage && !auth.user && (
                        <Link
                            className="h-full px-2 pt-3 text-[18px] active:bg-blue-600"
                            href="/auth/login"
                        >
                            Login
                        </Link>
                    )}
                    <input
                        placeholder="find more..."
                        className="w-64 border-l border-zinc-800 bg-[#202020] px-6 text-white transition-all outline-none focus:bg-[#252525]"
                    />
                </div>
            </div>
            {menus.posts && (
                <div className="absolute top-full left-24 z-50 grid w-48 space-y-2 rounded-b-md border border-zinc-800 bg-[#151515] px-3 py-2 shadow-xl">
                    <Link href="#">hi!</Link>
                    <Link href="#">hi!</Link>
                    <Link href="#">hi!</Link>
                </div>
            )}
            {menus.create && (
                <div className="absolute top-full left-63 z-50 grid w-48 space-y-2 rounded-b-md border border-zinc-800 bg-[#151515] px-3 py-2 shadow-xl">
                    <Link href="#">add post!</Link>
                    <Link href="#">add story</Link>
                </div>
            )}
            {menus.profile && (
                <div className="absolute top-full right-64 gap-2 z-50 grid w-20 justify-start space-y-2 rounded-b-md border border-zinc-800 bg-[#151515] px-3 py-2 shadow-xl">
                    <Link href="/profile">profile</Link>
                    <Link method="post" href="/logout">
                        logout
                    </Link>
                </div>
            )}
        </header>
    );
}
