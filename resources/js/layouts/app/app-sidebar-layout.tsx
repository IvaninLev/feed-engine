import { usePage } from '@inertiajs/react';
import { AppHeader } from '@/components/custom/Header';
import { AppSidebar } from '@/components/custom/Sidebar';
import { AppContent } from '@/components/laravel/app-content';
import { AppShell } from '@/components/laravel/app-shell';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({ children }: AppLayoutProps) {
    const { auth } = usePage().props;

    return (
        <AppShell variant="sidebar">
            {auth.user && <AppSidebar />}
            <AppContent
                variant="sidebar"
                className="relative h-screen overflow-y-auto"
            >
                <AppHeader />
                {children}
            </AppContent>
        </AppShell>
    );
}
