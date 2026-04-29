import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { route as ziggyRoute } from 'ziggy-js';
import { Ziggy } from '@/ziggy';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function route(name?: string, params?: any, absolute?: boolean) {
    return ziggyRoute(name as any, params, absolute, Ziggy as any);
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}
