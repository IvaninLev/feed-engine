import type { Post, Story, User } from '@/types';
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
export default function Profile({ posts, stories }: ListProps) {

    return (
        <div>
            <Stories stories={stories} />
            <PostList posts={posts} />
        </div>
    );
}
