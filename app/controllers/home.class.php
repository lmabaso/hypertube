<?php

class Home extends Controller
{
    public function index($name = '')
    {
        $user = new User();
        $this_user = NULL;
        $is_loggeding = false;
        if (Input::get('login'))
        {
            echo "were here" . Input::get('username') . "<br>";
            var_dump($_REQUEST);
        }
        if ($user->isLoggedIn())
        {
            $this_user = $user->data()->user_username;
            $is_loggeding = true;
        }
        $this->view("header");
        $this->view("topnav", ['name' => $this_user, 'isloggedin' => $is_loggeding]);
        $this->view("sidenav");
        $this->view("video_show");
        $this->view("login");
        $this->view("signup");
        $this->view("footer");
    }
}