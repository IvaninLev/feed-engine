import { Card } from '@/components/ui/card';
import type { Story } from '@/types';

interface StoriesListProp {
    stories: {
        data: Story[];
        meta: any;
        links: any;
    };
}
export default function Stories({ stories }: StoriesListProp) {
    const storiesList = stories.data;


    if (!stories) {
        return <div>No posts yet...</div>;
    }

    return (
        <div className="mt-16 flex w-full justify-center space-x-5">
            {storiesList.map((story) => (
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
                            <span>{story.created_at}</span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}
