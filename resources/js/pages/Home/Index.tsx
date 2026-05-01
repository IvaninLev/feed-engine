import type { Post, Story } from '@/types';
import CreatePost from '../../components/feed/home/CreatePost';
import PostList from '../../components/feed/home/PostList';
import Stories from '../../components/feed/home/Stories';

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
export default function Index({ posts, stories }: ListProps) {
    console.log('индекс получил', posts);

    return (
        <div>
            <Stories stories={stories} />
            <CreatePost />
            <PostList posts={posts} />
        </div>
    );
}
