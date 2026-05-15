import type { PaginatedResponse, Post, Story } from '@/types';
import { PostList } from '../../components/posts/PostList';
import Stories from '../../components/story/Stories';

interface ListProps {
    posts: PaginatedResponse<Post>;
    stories: PaginatedResponse<Story>;
}
export default function Profile({ posts, stories }: ListProps) {

    return (
        <div>
            <Stories stories={stories} />
            <PostList posts={posts} />
        </div>
    );
}
