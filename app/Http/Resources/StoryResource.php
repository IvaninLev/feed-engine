<?php

namespace App\Http\Resources;

use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Story */
class StoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'type' => $this->type,
            'expires_at' => $this->expires_at,
            'created_at' => $this->created_at->format('d.m.Y'),

        ];
    }
}
