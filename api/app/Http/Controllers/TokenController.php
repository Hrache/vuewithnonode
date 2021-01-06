<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TokenController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Generates token for each api request
     */
    public function token(Request $request)
    {
        $request->session()->regenerateToken();

        $_token = $request->session()->token();

        return $_token;
    }

    /**
     * Checks whether the token is correct or no
     */
    private function checkToken(Request &$request): bool
    {
        return ($request->has('_token') && $request->session()->token() === $request->_token);
    }
}
