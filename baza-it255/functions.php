<?php 
	include("config.php");
	
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
	}

	function checkIfUserExists($username){
		global $conn;
		$result = $conn->prepare("SELECT * FROM korisnik WHERE username=?");
		$result->bind_param("s",$username);
		$result->execute();
		$result->store_result();
		$num_rows = $result->num_rows;
		if($num_rows > 0) {
			return true;
		}
		else{
			return false;
		}
	}


	
	function checkLogin($username, $password){
    	global $conn;
    	$password = md5($password);
    	$result = $conn->prepare("SELECT * FROM korisnik WHERE username=? AND password=?");
    	$result->bind_param("ss",$username,$password);
    	$result->execute();
    	$result->store_result();
    	$num_rows = $result->num_rows;
    	if($num_rows > 0){
        	return true;
   		}
    	else{   
        	return false;
    	}
}

	function checkIfLoggedIn(){
		global $conn;
		if(isset($_SERVER['HTTP_TOKEN'])){
			$token = $_SERVER['HTTP_TOKEN'];
			$result = $conn->prepare("SELECT * FROM korisnik WHERE token=:token");
			$result->bindParam(":token",$token);
			$result->execute();
			if($data = $result->fetch() > 0)
			{
				return true;
			}
			else{   
				return false;
			}
		}
		else{
			return false;
		}
	}

	function getAdmin($username) {
		global $conn;
		$result2 = $conn->prepare("SELECT * FROM korisnik WHERE username = ? AND admin = 1");
		$result2->bind_param("s",$username);
		$result2->execute();
    	$result2->store_result();
    	$num_rows = $result2->num_rows;
    	if($num_rows > 0){
        	return true;
   		}
    	else{   
        	return false;
    	}
	}
	
		function login($username, $password){
    	global $conn;
    	$rarray = array();
    	if(checkLogin($username,$password)){
        	$id = sha1(uniqid());
        	$result2 = $conn->prepare("UPDATE korisnik SET token = ? WHERE username = ?");
    		$result2->bind_param("ss",$id,$username);
        	$result2->execute();
        	$rarray['token'] = $id;
        	if (getAdmin($username)) {
        		$rarray['admin'] = 1;
        	}
        	else {
        		$rarray['admin'] = 0;
        	}
    	} else{
        	header('HTTP/1.1 401 Unauthorized');
        	$rarray['error'] = "Invalid username/password";
    	}
    	return json_encode($rarray);

}
	

	function register($first, $last, $username, $password, $confirm, $country, $city, $email,$mobile) {
	global $conn;
	$errors = "";
	if(checkIfUserExists($username)) {
		$errors .="Username already exists\n";
	}
	if(strlen($first) <	 3) {
		$errors .="First name must have at least 3 charachters.";
	}
	if(strlen($last) < 3) {
		$errors .="Last name must have at least 3 charachters.";
	}
	if(strlen($username) < 5) {
		$errors .="Username must have at least 5 charachters.";
	}
	if(strlen($password) < 5) {
		$errors .="Password must have at least 5 charachters.";
	}
	if(strlen($confirm) < 5) {
		$errors .="Confirm password must have at least 5 charachters.\n";
	}
	if(strlen($country) < 5) {
		$errors .="Country name must have at least 5 charachters.\n";
	}
	if(strlen($city) < 5) {
		$errors .="City name must have at least 5 charachters.\n";
	}
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors= "Invalid email format.\n";
	}
	if(strlen($mobile) < 10) {
		$errors .="Mobile must have at least 10 characters.\n";
	}
	if($errors == ""){
		$query=$conn->prepare("INSERT INTO korisnik(first,last,username,password,confirm,country,city,email,mobile) VALUES (?,?,?,?,?,?,?,?,?)");
		$query->bind_param('sssssssss',$first,$last,$username,md5($password),md5($confirm),$country,$city,$email,$mobile);
		if($query->execute()){
				$id = sha1(uniqid());
				$result2 = $con->prepare("UPDATE korisnik SET token=:token WHERE username=:username");
				$result2->bindParam(":token",$id);
				$result2->bindParam(":username",$username);
				$result2->execute();
				$rarray['token'] = $id;
		}else{
				header('HTTP/1.1 400 Bad request');
				$rarray['error'] = "Database connection error";
		}
	} else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = json_encode($errors);
    }
		
	return json_encode($rarray);
}

	function addBook($name,$author,$price,$about,$type) {
		global $conn;
		$rarray = array();
		$errors = "";
		if(strlen($name) < 5){
			$errors .= "Name must have at least 5 characters";
		} 
		if(strlen($author) < 5){
			$errors .= "Author must have at least 5 characters\n";
		}
		if(strlen($price) < 1){
			$errors .= "Price must have at least 1 character.\n";
		}
		if(strlen($about) < 20){
			$errors .= "About must have at least 20 characters\n";
		}
		if(strlen($type) <3) {
			$errors .="Type must have at least 3 characters\n";
		}
		if($errors == ""){
	        $query=$conn->prepare("INSERT INTO knjiga (name,author,price,about,type) VALUES (?,?,?,?,?)");
        	$query->bind_param('sssss',$name,$author,$price,$about,$type);
        	$query->execute();
        	$query->close();
        	echo "ok";
			 
		} else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = json_encode($errors);
		}
		return json_encode($rarray);
}
	function addOrder($id_korisnik,$id_knjiga) {
		global $conn;
		$rarray = array();
		$errors = "";
		if($errors == ""){
	        $query=$conn->prepare("INSERT INTO korisnik_knjiga (id_korisnik,id_knjiga) VALUES (?,?)");
        	$query->bind_param('ss',$id_korisnik, $id_knjiga);
        	$query->execute();		
        	$query->close();
        	echo "ok";
			 
		} else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = json_encode($errors);
		}
		return json_encode($rarray);
}

	

