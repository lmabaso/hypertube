<?php

class Auth
{
    private $Database;

    function __construct()
    {
        global $Database;
        $this->$Database = $Database;
    }

    function validateLogin($name, $pass)
    {
        $user = new User();
        $login = $user->login($name, $pass);
        if ($login)
        {
            echo Session::flash('success', 'Your loggin was succesfully');

        }
        else
        {
            echo Session::flash('fail', 'Your login was unsuccesfull');
        }
    }
}