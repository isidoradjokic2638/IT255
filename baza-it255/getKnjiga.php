<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET');  
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
 	include("config.php");

           global $conn;
	if(isset($_GET['id'])){
		$id = $_GET['id'];
        $rarray = array();
        $niz = array();
        $result2 = $conn->query("SELECT * FROM knjiga WHERE id = ".$id."");
        while($row = $result2->fetch_assoc()) {
            $niz['id'] = $row['id'];
            $niz['name'] = $row['name'];
            $niz['author'] = $row['author'];
            $niz['about'] = $row['about'];
            $niz['price']=$row['price'];
            $niz['type']=$row['type'];
        }
        $rarray['data'] = $niz;
        echo json_encode($rarray);
    
}
 
?>