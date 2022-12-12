<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization,X-Requested-With");

include ('data.php');

$result = mysqli_query($con,"SELECT * FROM paypal");
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
echo ($outp);
?>