<?php
    include("functions.php");
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: POST');  
    
    if(isset($_POST['first']) && isset($_POST['last']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['confirm']) && isset($_POST['country']) && isset($_POST['city']) && isset($_POST['email']) && isset($_POST['mobile'])){        
        $first = $_POST['first'];
        $last = $_POST['last'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $confirm = $_POST['confirm'];
        $country = $_POST['country'];
        $city = $_POST['city'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        echo register($first,$last,$username,$password,$confirm,$country,$city,$email,$mobile);
    }

?>