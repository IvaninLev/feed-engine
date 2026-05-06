<?php

namespace App\Http\Controllers;

use App\Enums\PaginationEnum;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::paginate(PaginationEnum::PAGE_SIZE->value);

        return Inertia::render('Home/Index', [
            'users' => $users,
        ]);
    }



    public function store() {}
}
