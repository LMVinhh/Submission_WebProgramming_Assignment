<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization,X-Requested-With");

include ('data.php');

$result = mysqli_query($con,"SELECT * FROM product");
$outp = "";
while($rs = mysqli_fetch_array($result))
{
    if($outp != ""){$outp .= ",";}
    $outp .= '{"id":"'. $rs["id"] . '",'  ;
    $outp .= '"idproduct":"'. $rs["idproduct"] . '",'; 
    $outp .= '"nameproduct":"'. $rs["nameproduct"] . '",'; 
    $outp .= '"amountproduct":"'. $rs["amountproduct"] . '",'; 
    $outp .= '"statusproduct":"'. $rs["statusproduct"] . '",'; 
    $outp .= '"typeproduct":"'. $rs["typeproduct"] . '",'; 
    $outp .= '"costproduct":"'. $rs["costproduct"] . '",'; 
    $outp .= '"imageproduct":"'. $rs["imageproduct"] . '",'; 
    $outp .= '"describeproduct":"'. $rs["describeproduct"] . '"}'; 

}
$outp = '{"records":[' .$outp.']}';
echo ($outp);
?>