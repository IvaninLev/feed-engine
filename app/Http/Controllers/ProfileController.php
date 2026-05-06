<?php

namespace App\Http\Controllers;

use App\Enums\PaginationEnum;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\StoryResource;
use App\Models\Post;
use App\Models\Story;
use App\Models\User;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $posts = PostResource::collection(
            Post::with('user')
                ->latest()
                ->paginate(PaginationEnum::PAGE_SIZE->value)
        );
        $stories = StoryResource::collection(
            Story::with('user')
                ->isActive()
                ->latest()
                ->paginate(PaginationEnum::PAGE_SIZE->value)
        );

        return Inertia::render('Profile/Profile', [
            'posts' => $posts,
            'stories' => $stories,
        ]);
    }

    public function show(User $id)
    {
        $posts = PostResource::collection(
            Post::where('user_id', '=', $id->id)
                ->latest()
                ->paginate(PaginationEnum::PAGE_SIZE->value)
        );
        $stories = StoryResource::collection(
            Story::where('user_id', '=', $id->id)
                ->isActive()
                ->latest()
                ->paginate(PaginationEnum::PAGE_SIZE->value)
        );

        return Inertia::render('Profile/Profile', [
            'user' => $id,
            'posts' => $posts,
            'stories' => $stories,
        ]);
    }

    public function store(PostRequest $request)
    {
        $data = $request->validated();
        $user = User::first();

        $post = $user->posts()->create($data);

        return redirect()->back();

    }


    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->validated());

        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json();
    }
}
