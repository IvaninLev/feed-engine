import { Card, CardTitle } from '@/components/ui/card';
import type { Post } from '@/types';

interface PostProps {
    post: Post;
}

export default function PostDetails({ post }: PostProps) {
    console.log('postdata', post);

    return (
        <section className="flex justify-center">
            <Card
                key={post.id}
                className="relative w-200 overflow-auto bg-[#202020] p-0"
            >
                {post.image && (
                    <img
                        src={`/storage/${post.image}`}
                        className="h-75 w-full rounded-lg border border-zinc-800 object-cover"
                        alt="Post content"
                    />
                )}
                <div className="p-4">
                    <CardTitle className="text-zinc-100">
                        {post.title}
                    </CardTitle>
                    <p className="mt-2 text-zinc-400">{post.text}</p>
                    <div className="flex w-full justify-between">
                        <span className="pt-2 text-sm text-[#828282]">
                            {post.created_at}
                        </span>
                    </div>
                </div>
            </Card>
        </section>
    );
}
