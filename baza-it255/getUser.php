<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET');  
	// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
 	include("config.php");

        global $conn;
	   if(isset($_GET['token'])){
		$token = $_GET['token'];
        $rarray = array();
        $niz = array();
        $result2 = $conn->query("SELECT * FROM korisnik WHERE token = '".$token."'");
        while($row = $result2->fetch_assoc()) {
            $niz['id'] = $row['id'];
            $niz['first'] = $row['first'];
        }
        $rarray['data'] = $niz;
        echo json_encode($rarray);
    
}
 
?>