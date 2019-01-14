<?php

class login extends Controller
{
    public function index($name = '', $pwd = '')
    {
        $login = new Auth();
        $login->validateLogin($name, $pwd);
        // $login->validateLogin();
    }
}