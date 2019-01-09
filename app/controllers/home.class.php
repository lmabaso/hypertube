<?php

class Home extends Controller
{
    public function index($name = '')
    {
        $user = DB::getInstance();

        $res = $user->query("SELECT * FROM users")->results();
        // echo $res[0]->user_username;

        $this->view("home/index", ['name' => $res[0]->user_username]);
        // // $user = $this->model('User');
        // var_dump($user);
        // // $user->name = $name;
        // if ($user->isLoggedIn())
        // {

        // }
        // else
        // {
        //     $this->view('home/index');
        // }

    }
}