import CreatePost from '../../components/feed/home/CreatePost';
import PostList from '../../components/feed/home/PostList';
import Stories from '../../components/feed/home/Stories';

export default function Index() {
    return (
            <div>
                <Stories />
                <CreatePost />
                <PostList />
            </div>
    );
}
