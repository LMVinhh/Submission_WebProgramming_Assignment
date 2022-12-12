<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: PUT"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization,X-Requested-With");
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"register");

$sql = "SELECT * from paypal where email = '".$_GET['email']."'";
$result = mysqli_query($con,$sql);
$outp = "";

while($rs = mysqli_fetch_array($result))
{
    if($outp != ""){$outp .= ",";}
    $outp .= '{"id":"'. $rs["id"] . '",'  ;
    $outp .= '"name":"'. $rs["name"] . '",'; 
    $outp .= '"phone":"'. $rs["phone"] . '",'; 
    $outp .= '"address":"'. $rs["address"] . '",'; 
    $outp .= '"email":"'. $rs["email"] . '",'; 
    $outp .= '"product":"'. $rs["product"] . '",'; 
    $outp .= '"cost":"'. $rs["cost"] . '",'; 
    $outp .= '"method":"'. $rs["method"] . '",'; 
    $outp .= '"date":"'. $rs["date"] . '"}'; 

}
$outp = '{"records":[' .$outp.']}';

echo $outp;
?>