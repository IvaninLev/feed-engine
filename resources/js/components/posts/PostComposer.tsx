import { useForm } from '@inertiajs/react';
import { CameraIcon, SendHorizonal } from 'lucide-react';
import { useRef, useState } from 'react';
import { Card } from 'resources/js/components/ui/card';

interface PostProps {
    text: string;
    image: File | null;
}

export default function PostComposer() {
    const { data, setData, post, errors, reset } = useForm<PostProps>({
        text: '',
        image: null,
    });

    const [previewUrl, setPreviewUrl] = useState<string | null>();

    const fileRef = useRef<HTMLInputElement>(null);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        post(window.route('post.store'), {
            onSuccess: () => reset('text', 'image'),
            onError: () => console.log('тут легло', errors),
        });
    };

    return (
        <Card className="mt-8 ml-55 flex min-h-18.5 w-full max-w-200 items-stretch border-zinc-800 bg-zinc-900/50 p-4">
            <div className="flex w-full items-center">
                {previewUrl && (
                    <img
                        alt=""
                        src={`${previewUrl}`}
                        className="h-30 w-30 object-cover"
                    />
                )}
                <textarea
                    placeholder="Write something"
                    value={data.text}
                    onChange={(e) => setData('text', e.target.value)}
                    className="flex-1 resize-none bg-transparent py-1 text-sm outline-none"
                />
                <div className="flex space-x-4">
                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];

                            if (!file) {
                                return;
                            }


                            if (previewUrl) {
                                URL.revokeObjectURL(previewUrl);
                            }

                            setData('image', file);
                            setPreviewUrl(URL.createObjectURL(file));
                        }}
                    />

                    <CameraIcon
                        onClick={() => fileRef.current?.click()}
                        className="hover:cursor-pointer"
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
