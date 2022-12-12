<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: PUT"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization,X-Requested-With");
include ('data.php');


$sql = "SELECT * from register where id = '".$_GET['id']."'";
$result = mysqli_query($con,$sql);
$outp = "";

while($rs = mysqli_fetch_array($result))
{
    if($outp != ""){$outp .= ",";}
    $outp .= '{"id":"'. $rs["id"] . '",'  ;
    $outp .= '"name":"'. $rs["name"] . '",'; 
    $outp .= '"email":"'. $rs["email"] . '",'; 
    $outp .= '"phone":"'. $rs["phone"] . '",'; 
    $outp .= '"password":"'. $rs["password"] . '",'; 
    $outp .= '"address":"'. $rs["address"] . '"}'; 

}
echo $outp;
?>