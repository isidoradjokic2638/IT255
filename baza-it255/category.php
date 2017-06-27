 <?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
  include ('config.php');

 global $conn;
 if(isset($_GET['type'])) {
    $type=$_GET['type'];
    $rarray = array();
    $niz = array();
    $sql = "SELECT * FROM knjiga WHERE type='" . $type . "'";
    $result2 = $conn->query($sql);
    while($row = $result2->fetch_assoc()) {
            $niz['id'] = $row['id'];
            $niz['name'] = $row['name'];
            $niz['author'] = $row['author'];
        }
        $rarray['data'] = $niz;
        echo json_encode($rarray);
}
   
?>

 
