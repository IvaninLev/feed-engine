import { Card, CardTitle } from '@/components/ui/card';

export default function PostList() {
    const posts = [
        {
            id: 1,
            title: 'cool title',
            text: 'Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.',
            image: 'https://loremflickr.com/400/600?random=1',
        },
        {
            id: 2,
            title: 'iguess',
            text: 'Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.',
            image: 'https://loremflickr.com/400/600?random=2',
        },
        {
            id: 3,
            title: 'iguess',
            text: 'Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.',
            image: 'https://loremflickr.com/400/600?random=3',
        },
        {
            id: 4,
            title: 'iguess',
            text: 'Nullam nec turpis et arcu egestas commodo. Integer sit amet metus non tortor tincidunt interdum. Donec et metus mollis, ultricies est at, ultricies nulla. Morbi non libero magna. Praesent imperdiet magna ac ipsum cursus, ut fermentum turpis tincidunt.',
            image: 'https://loremflickr.com/400/600?random=4',
        },
    ];

    return (
        <div className="mt-8 justify-items-center space-y-8 overflow-auto shadow-xl">
            {posts.map((post) => (
                <Card key={post.id} className="relative w-200 bg-[#202020] p-0 overflow-auto">
                    {post.image && (
                        <img
                            src={post.image}
                            className="h-75 w-full rounded-lg border border-zinc-800 object-cover"
                            alt="Post content"
                        />
                    )}
                    <div className="p-4">
                        <CardTitle className="text-zinc-100">
                            {post.title}
                        </CardTitle>
                        <p className="mt-2 text-zinc-400">{post.text}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
}
