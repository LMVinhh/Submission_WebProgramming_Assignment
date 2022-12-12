<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "register"; 
$id = '';
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'GET':
        if(isset($_GET["id"])){
          $id = $_GET['id'];  
        }     
        $sql = "select * from product".($id?" where id=$id":''); 
        break;
    case 'POST':
        if(isset($_GET["id"])){
            $id = $_GET['id'];  
            $idproduct= $_GET['idproduct'];  
            $nameproduct = $_POST["nameproduct"];
            $amountproduct = $_POST["amountproduct"];
            $statusproduct = $_POST["statusproduct"];
            $typeproduct = $_POST["typeproduct"];
            $costproduct = $_POST["costproduct"];
            $imageproduct = $_POST["imageproduct"];
            $describeproduct = $_POST["describeproduct"];

            $sql = "UPDATE product SET idproduct='$idproduct', nameproduct='$nameproduct', amountproduct='$amountproduct', statusproduct='$statusproduct', typeproduct='$typeproduct', costproduct='$costproduct',imageproduct='$imageproduct',describeproduct='$describeproduct' WHERE id = $id"; 
        }
        else if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM product WHERE id = $delete"; }
            else{
   
                $idproduct= $_GET['idproduct'];  
                $nameproduct = $_POST["nameproduct"];
                $amountproduct = $_POST["amountproduct"];
                $statusproduct = $_POST["statusproduct"];
                $typeproduct = $_POST["typeproduct"];
                $costproduct = $_POST["costproduct"];
                $imageproduct = $_POST["imageproduct"];
                $describeproduct = $_POST["describeproduct"];

       $sql = "insert into product (idproduct, nameproduct, amountproduct, statusproduct,typeproduct,costproduct,imageproduct,describeproduct) 
values ('$idproduct', '$nameproduct', '$amountproduct', '$statusproduct', '$typeproduct', '$costproduct', '$imageproduct', '$describeproduct')"; 
            }
      break;
}
 
// run SQL statement
 $result = mysqli_query($con,$sql);
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();