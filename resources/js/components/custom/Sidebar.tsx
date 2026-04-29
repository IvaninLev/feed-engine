import { Icon } from '@iconify/react';
import image from '../../../images/testImage.svg';

export function AppSidebar() {
    return (
        <aside className="flex w-75 flex-col bg-[#202020] text-white">
            <div className="relative flex w-full justify-center">
                <img
                    alt="sidebarHeader"
                    src={image}
                    className="h-45 w-full object-cover"
                />
                <img
                    alt="avatar"
                    className="absolute -bottom-10 h-20 w-20 rounded-full border-2 border-[#202020] object-cover shadow-lg"
                    src={image}
                />
            </div>

            <div className="mt-12 flex flex-col items-center p-4">
                <h1 className="text-lg font-bold">User Name</h1>
                <h2 className="text-sm text-zinc-500">Whose blog</h2>

                <div className="mt-4 flex space-x-4">
                    <Icon
                        icon="skill-icons:instagram"
                        className="h-6 w-6 transition-transform hover:scale-110"
                    />
                    <Icon
                        icon="skill-icons:twitter"
                        className="h-6 w-6 transition-transform hover:scale-110"
                    />
                    <Icon
                        icon="fa6-brands:pinterest"
                        className="h-6 w-6 text-red-700 transition-transform hover:scale-110"
                    />
                </div>
                <p className="mt-14 w-60 text-center text-sm break-words">
                    A
                    wesome description
                </p>
            </div>
        </aside>
    );
}
