<?php

require_once 'core/App.class.php';
require_once 'core/Controller.class.php';
require_once 'database.php';

session_start();

$GLOBALS['config'] = array(
	'mysql'	=> array(
		'host' => $dbServicename ,
		'username' => $dbUsername ,
		'password' => $dbPassword,
		'db' => $dbName
	),
	'remember' => array(
		'cookie_name' => 'hash',
		'cookie_expire' => '604800'
	),
	'session' => array(
		'session_name' => 'user',
		'token_name' => 'token'
	)
);

spl_autoload_register(function ($class) {
    require_once ('models/' . $class . '.class.php');
});

require_once 'controllers/Sanitize.php';