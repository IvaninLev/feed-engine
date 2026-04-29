<?php

namespace App\Observers;

use App\Models\Post;
use Illuminate\Support\Str;
use League\CommonMark\GithubFlavoredMarkdownConverter;
use Stevebauman\Purify\Facades\Purify;

class PostObserver
{
    public function saving(Post $post)
    {
        if ($post->isDirty('text')) {
            $lines = explode("\n", trim($post->text));
            $firstLine = $lines[0] ?? 'Untitled post';
            $post->title = Str::limit($firstLine, 100, '');

            if (! $post->exists || empty($post->slug)) {
                $post->slug = Str::slug($post->title).'-'.Str::lower(Str::random(5));
            }

            $converter = new GithubFlavoredMarkdownConverter([
                'html_input' => 'strip',
                'allow_unsafe_links' => false,
            ]);
            $html = $converter->convert($post->text)->getContent();

            $post->content_html = Purify::clean($html);

        }
    }
}
