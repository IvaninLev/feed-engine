import { router } from '@inertiajs/react';

export function createPageNavigator(path: string, scroll:boolean) {
    return (page: number) => {
        router.get(path, { page }, { preserveScroll: scroll });
    };
}
