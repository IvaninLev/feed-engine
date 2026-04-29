import { Card } from '@/components/ui/card';

export default function Stories() {
    const stories = [
        {
            id: 1,
            date: '12 апреля',
            image: 'https://loremflickr.com/400/600?random=1',
        },
        {
            id: 2,
            date: '13 апреля',
            image: 'https://loremflickr.com/400/600?random=2',
        },
        {
            id: 3,
            date: '14 апреля',
            image: 'https://loremflickr.com/400/600?random=3',
        },
        {
            id: 4,
            date: '15 апреля',
            image: 'https://loremflickr.com/400/600?random=4',
        },
    ];

    return (
        <div className="mt-16 flex w-full justify-center space-x-5">
            {stories.map((story) => (
                <Card
                    key={story.id}
                    className="relative h-62.5 w-45 min-w-35 overflow-hidden"
                >
                    <img
                            className="absolute inset-0 h-full w-full object-cover"
                        src={story.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 leading-tight">
                        <span className="font-bold">Story name</span>
                        <div className="">
                            <span>{story.date}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
