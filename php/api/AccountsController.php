<?php

use Rakit\Validation\Validator;

class AccountsController
{
    static function register()
    {
        $validator = new Validator();

        $valid = $validator->validate($_POST, [
            'name' => 'required|string',
            'surname' => 'required|string',
            'regemail' => 'required|email',
            'emailconfirm' => 'required|same:regemail',
            'regpassword' => 'required|between:8,25',
            'passwordconfirm' => 'required|same:regpassword',
        ]);

        if ($valid->fails()) {
            $_SESSION['fail'] = $valid->errors();
        }
        else {
            require_once(models.'\\Accounts.php');

            $newAccount = new Accounts();

            $newAccount->fill($_POST)->saveOrFail();

            $_SESSION['success'] = "Your account have been registered successfully. Congratulations!";
        }
    }

    static function login()
    {
        //
    }
}