<?php

class Auth
{
    private $Database;

    function __construct()
    {
        global $Database;
        $this->$Database = $Database;
    }

    function validateLogin($user, $pass)
    {
        $user = new User();
        $login = $user->login($user, $pass);
        if ($login)
        {
            echo Session::flash('success', 'Your loggin was succesfully');
        //	Redirect::to('index.php');
        }
        else
        {
            echo Session::flash('fail', 'Your login was unsuccesfull');
        }
    }
}