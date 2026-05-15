import type { PaginatedResponse, User } from 'resources/js/types';
import UsersList from '../../components/users/UsersList';

interface UserProps {
    users: PaginatedResponse<User>;
}

export default function Index({ users }: UserProps) {
    return (
        <div>
            <UsersList users={users} />
        </div>
    );
}
