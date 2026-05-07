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
    user: {
        data: User;
    };
}
export default function Profile({ posts, stories, user }: ListProps) {
    console.log('в профиль пришло', posts);

    return (
        <div>
            <Stories user={user} stories={stories} />
            <PostList user={user} posts={posts} />
        </div>
    );
}
