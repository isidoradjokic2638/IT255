<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include 'functions.php';

		if(isset($_GET['id'])) {
			$id = $_GET['id'];
	 		$sql = "SELECT knjiga.name, knjiga.author, knjiga.id, knj.id FROM knjiga JOIN korisnik_knjiga as knj WHERE knj.id_knjiga = knjiga.id AND knj.id_korisnik ='".$id."'";
	 		if($stmt = $conn->prepare($sql)) {
	    		$stmt->execute();
	    			if(!$stmt->execute()) { 
	            		echo $stmt->error;
	    			}
	    			else {
	        			$parameters = array();
	        			$result = $stmt->get_result();
	        while ($row = $result->fetch_assoc()) {
	          array_push($parameters,$row);
	        }
	        $stmt->close();
	        
	    }
	  }
	  echo json_encode($parameters);
	  }
?>