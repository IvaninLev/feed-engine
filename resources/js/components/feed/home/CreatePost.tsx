import { useForm } from '@inertiajs/react';
import { CameraIcon, SendHorizonal } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CreatePost() {
    const { data, setData, post, processing, errors, reset } = useForm({
        text: '',
    });
    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        post(window.route('post.store'), {
            onSuccess: () => reset('text'),
            onError: () => console.log('тут легло', errors)
        });
    };

    return (
        <Card className="mt-8 ml-55 flex min-h-18.5 w-full max-w-200 items-stretch border-zinc-800 bg-zinc-900/50 p-4">
            <div className="flex w-full items-center">
                <textarea
                    placeholder="Write something"
                    value={data.text}
                    onChange={(e) => setData('text', e.target.value)}
                    className="flex-1 resize-none bg-transparent py-1 text-sm outline-none"
                />
                <div className="flex space-x-4">
                    <CameraIcon
                        className="cursor-pointer transition-colors hover:text-zinc-300"
                        size={25}
                    />
                    <SendHorizonal
                        className="cursor-pointer transition-colors hover:text-white"
                        size={25}
                        onClick={submit}
                    />
                </div>
            </div>
        </Card>
    );
}
