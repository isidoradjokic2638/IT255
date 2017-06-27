<?php
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    include("config.php");

    global $conn;
	if(isset($_GET['id'])){
        $id=$_GET['id'];
        $rarray = array();
        $result = $conn->prepare("DELETE FROM knjiga WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "ok";
     
    return json_encode($rarray);
	}  
?>