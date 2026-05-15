import type { Post } from '@/types';
import PostDetails from '../../components/posts/PostDetails';

interface PostProps {
    post: Post;
}

export default function Show(props: PostProps) {
    return <PostDetails post={props.post} />;
}
