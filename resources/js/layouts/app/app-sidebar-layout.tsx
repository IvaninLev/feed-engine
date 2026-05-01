import { AppContent } from '../../components/laravel/app-content';
import { AppShell } from '../../components/laravel/app-shell';
import { AppHeader } from '@/components/custom/Header';
import { AppSidebar } from '@/components/custom/Sidebar';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({
    children,
}: AppLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
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
