<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required'],
            'image' => ['required'],
            'user_id' => ['required', 'exists:users'],
            'type' => ['required'],
            'created_at' => ['required', 'date'],
            'expires_at' => ['required', 'date'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
