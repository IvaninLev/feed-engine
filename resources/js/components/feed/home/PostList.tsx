import { Card, CardTitle } from '@/components/ui/card';
import Pagination from '@/components/ui/pagination';
import {
    createPageNavigator,
} from '@/hooks/use-pagination-navigation';
import type { Post } from '@/types';

interface PostListProps {
    posts: {
        data: Post[];
        meta: { total: number; current_page: number; last_page: number };
        links: { next?: string; prev?: string };
    };
}

export default function PostList({ posts }: PostListProps) {
    const postList = posts.data;
    const postPages = posts.meta;

    const handlePageChange = createPageNavigator('/', true);

    if (!postList || postList.length === 0) {
        return <div>No posts yet...</div>;
    }

    return (
        <div className="mt-8 justify-items-center space-y-8 overflow-auto shadow-xl">
            {postList.map((post) => (
                <Card
                    key={post.id}
                    className="relative w-200 overflow-auto bg-[#202020] p-0"
                >
                    {post.image && (
                        <img
                            src={post.image}
                            className="h-75 w-full rounded-lg border border-zinc-800 object-cover"
                            alt="Post content"
                        />
                    )}
                    <div className="p-4">
                        <CardTitle className="text-zinc-100">
                            {post.title}
                        </CardTitle>
                        <p className="mt-2 text-zinc-400">{post.text}</p>
                    </div>
                </Card>
            ))}

            <Pagination
                currentPage={postPages.current_page}
                lastPage={postPages.last_page}
                onPageChange={handlePageChange}
            ></Pagination>
        </div>
    );
}
