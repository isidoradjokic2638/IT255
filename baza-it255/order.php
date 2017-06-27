<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("functions.php");

if(isset($_POST['id_korisnik']) && isset($_POST['id_knjiga'])) {
        
        $id_knjiga = $_POST['id_knjiga'];
        $id_korisnik = $_POST['id_korisnik'];
        echo addOrder($id_korisnik,$id_knjiga);
    
        
    }


?>