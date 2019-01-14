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

    public function login($name = '', $pwd = '')
    {
        $login = new Auth();
        $login->validateLogin($name, $pwd);
        Redirect::to('http://127.0.0.1:8080/hypertube/home');
    }

    public function logout()
    {
        $user = new User();
        $user->logout();
        Redirect::to('http://127.0.0.1:8080/hypertube/home');
    }

    public function signup($username = '', $name = '', $pwd = '', $pwd_again = '', $email = '')
    {
        $user_input = array('username' => $username, 'name' => $name, 'email'=> $email, 'pwd' => $pwd, 'pwd_again' => $pwd_again);
        $validate = new Validate();
		$validation = $validate->check($user_input, array(
			'username' => array(
				'required' => true,
				'min' => 2,
				'max' => 256,
				'unique' => 'users'
			),
			'name' => array(
				'required' => true,
				'min' => 2,
				'max' => 256
			),
			'email' => array(
				'required' => true,
				'min' => 6,
				'max' => 256,
				'valid_email' => 'email',
				'unique' => 'users'
			),
			'pwd' => array(
				'required' => true,
				'min' => 6
			),
			'pwd_again' => array(
				'required' => true,
				'min' => 6,
				'matches' => 'pwd'
			),
		));
		if ($validation->passed()) {
            $user = new User();
            $salt = Hash::salt(32);
            $str = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
            $str = str_shuffle($str);
            $str = substr($str, 0, 10);
            try {
                $user->create(array(
                    'user_username' => $username,
                    'user_name' => $name,
                    'user_email' => $email,
                    'user_pwd' => $pwd,
                    'user_salt' => $salt,
                    'token' => $str
                ));
            } catch (Exception $e){
                die ($e->getMessage());
            }
            $message =
            "
            HI ". $name ."
            Confirm Your Email

            Click on the link below to verify your account
            http://localhost:8080/camagru/verify.php?email=".input::get('email')."&token=".$str;

            mail(Input::get('email'), "Camagru email confirmation", $message, "Camagru");
            echo Session::flash('success', 'Please verify you email address.');
            Redirect::to('http://127.0.0.1:8080/hypertube/home');
        } else {
            Redirect::to('http://127.0.0.1:8080/hypertube/home');
            foreach ($validation->errors() as $error) {
                echo $error . '</br>';
            }
        }
    }
}