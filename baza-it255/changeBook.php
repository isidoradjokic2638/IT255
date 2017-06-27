<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');  
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
}
	include("config.php");
	global $conn;

    $rarray = array();
	if(isset($_POST['id']) && isset($_POST['name']) && isset($_POST['author']) && isset($_POST['price']) && isset($_POST['about']) && isset($_POST['type'])){ 
		$id = $_POST['id'];
		$name = $_POST['name'];
		$author = $_POST['author'];
		$price = $_POST['price'];
		$about = $_POST['about'];
		$type = $_POST['type'];

        $stmt = $conn->prepare("UPDATE knjiga SET name=?, author=?, price=?, about =?,type=? WHERE id = ?");
        $stmt->bind_param("sssssi", $name, $author, $price, $about, $type, $id);
        if($stmt->execute()){
            $rarray['success'] = " ";
        }else{
            $rarray['error'] = "Connection error";
        }
    return json_encode($rarray);
}
	
?>