import type { User } from './auth';
export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface Post {
    id: number;
    title: string;
    text: string;
    content_html: string;
    image?: string;
    user_id: number;
    user?: User;
    slug: string;
    created_at?: string;
    updated_at?: string;
}

export interface Story {
    id: number;
    title: string;
    image: string;
    user_id: number;
    user?: User;
    type: string;
    is_active: boolean;
    created_at: string;
    expires_at: string;
}
