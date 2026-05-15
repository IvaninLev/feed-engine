import type { PaginatedResponse, Post } from '@/types';
import HomeFeed from '../../components/home/HomeFeed';
interface ListProps{
    posts: PaginatedResponse<Post>
}
export default function Index({posts}: ListProps){
    return(
                <HomeFeed posts={posts}/>
        );
}
