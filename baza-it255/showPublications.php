<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

global $conn;
    $sql = "SELECT id,name,author,type FROM knjiga";
    $result = $conn->query($sql);
    echo "<table class='tabelaa'><th>id</th><th>name</th><th>author</th>";
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr> <td><ul id ='myUL'><li>" . $row["id"]."</li></td>
                                  <td><li><a href='book.php?parametar={$row['id']}'>" . $row["name"] . "</a></li></td>
                                  <td><li>" . $row["author"] ."</li></td></a>" .
              "</tr><br>";
    }
    echo "</table>";
    
?>