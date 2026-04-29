<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    public function store(PostRequest $request)
    {
        $data = $request->validated();
        $user = User::first(); // Берем первого попавшегося

        if (!$user) {
            return response()->json(['error' => 'дурак нет юзеров'], 500);
        }

        $post = $user->posts()->create($data);

        return redirect()->back();

    }


    public function show(Post $post)
    {
        return new PostResource($post);
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
