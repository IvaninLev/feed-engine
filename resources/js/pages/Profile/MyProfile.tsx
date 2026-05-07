import type { Post, Story } from '@/types';
import CreatePost from '../../components/post/CreatePost';
import PostList from '../../components/post/PostList';
import Stories from '../../components/story/Stories';

interface ListProps {
    posts: {
        data: Post[];
        meta: any;
        links: any;
    };
    stories: {
        data: Story[];
        meta: any;
        links: any;
    };
}
export default function MyProfile({ posts, stories }: ListProps) {
    return (
        <div>
            <Stories stories={stories} />
            <CreatePost />
            <PostList posts={posts} />
        </div>
    );
}
