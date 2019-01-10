<?php
require_once 'app/init.php';
echo "were here" . Input::get('username') . "<br>";
var_dump($_REQUEST);
exit();
if (Input::get('login'))
{
    // if (Token::check(Input::get('token')))
	// {
		$validate = new Validate();
		$validation = $validate->check($_POST, array('username' => array('required' => true), 'pwd' => array('required' => true)));
		if ($validation->passed())
		{
			$user = new User();
            $login = $user->login(Input::get('username'), Input::get('pwd'));
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
		else
		{
			foreach ($validation->errors() as $error)
				echo $error . '</br>';
		}
    // }
    if (Session::exists('success'))
	{
		echo Session::flash('success');
	}
	if (Session::exists('fail'))
	{
		echo Session::flash('fail');
	}
}