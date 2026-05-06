import Users from '@/components/feed/home/Users';
import type { User } from '@/types';

interface UserProps {
    users: {
        data: User[];
        meta: any;
        links: any;
    };
}

export default function Index({ users }: UserProps) {
    return (
        <div>
            <Users users={users } />
        </div>
    );
}
