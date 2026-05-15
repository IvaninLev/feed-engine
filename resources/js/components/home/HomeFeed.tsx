import type { PaginatedResponse, Post } from '@/types';
import { PostList } from '@/components/posts/PostList';
interface PostListProps {
    posts: PaginatedResponse<Post>;
}

export default function HomeFeed({ posts }: PostListProps) {

    return (
        <PostList posts={posts} />
    );
}
