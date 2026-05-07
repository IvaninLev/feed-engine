import { Link } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import type { User } from '@/types';

interface UsersProps {
    users: {
        data: User[];
        meta: any;
        links: any;
    };
}

export default function Users({ users }: UsersProps) {
    const usersList = users.data;

    return (
        <section>
            <h1 className="p-10 pl-20 text-4xl">Users</h1>

            <div className="grid grid-cols-1 gap-8 px-4 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
                {usersList.map((user) => (
                    <Card
                        key={user.id}
                        className="relative overflow-hidden rounded-2xl border border-slate-700 from-slate-800 to-slate-900 p-0 transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/10"
                    >
                        {user.banner && (
                            <div className="relative h-32 overflow-hidden from-cyan-600 to-blue-600">
                                <img
                                    src={user.banner}
                                    alt=""
                                    className="h-full w-full object-cover opacity-80"
                                />
                            </div>
                        )}
                        <div className="relative px-6 pb-6">
                            <div
                                className={user.banner ? '-mt-16 mb-4' : 'mb-4'}
                            >
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 rounded-full from-cyan-400 opacity-75 blur transition-opacity" />
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="relative h-20 w-20 rounded-full border-4 border-slate-800 object-cover"
                                    />
                                    <span>{user.name}</span>
                                </div>
                                <div className="mt-10">
                                    <p>{user.description}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={`/profile/${user.id}`} className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all">
                            View Profile
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
}
