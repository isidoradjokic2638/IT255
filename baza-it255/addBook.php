<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("functions.php");

if(isset($_POST['name']) && isset($_POST['author']) && isset($_POST['price']) && isset($_POST['about']) && isset($_POST['type'])) {
		
		$name = $_POST['name'];
		$author = $_POST['author'];
		$price = $_POST['price'];
		$about = $_POST['about'];
		$type = $_POST['type'];
		echo addBook($name,$author,$price,$about,$type);
	
		
	}


?>