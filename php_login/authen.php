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
        $sql = "select * from register".($id?" where id=$id":''); 
        break;
    case 'POST':
            $name = $_POST["name"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $password = $_POST["password"];
            $address = $_POST["address"];
       $sql = "SELECT * FROM  register where email ='".$email."' AND password = '".$password."'";; 
    
      break;
}
 
// run SQL statement
 $result = mysqli_query($con,$sql);
// die if SQL statement failed
$num = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);
 if($num >= 1){
    http_response_code(200);
    $outp ="";
    $outp .= '{"id":"'. $rs["id"] . '",'  ;
    $outp .= '"name":"'. $rs["name"] . '",'; 
    $outp .= '"email":"'. $rs["email"] . '",'; 
    $outp .= '"phone":"'. $rs["phone"] . '",'; 
    $outp .= '"password":"'. $rs["password"] . '",'; 
    $outp .= '"address":"'. $rs["address"] . '",'; 
    $outp .= '"Status":"200"}'; 
    echo $outp;
    
    }
    else{
        http_response_code(202);

    }
// if ($method == 'GET') {
//     if (!$id) echo '[';
//     for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
//       echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
//     }
//     if (!$id) echo ']';
//   } elseif ($method == 'POST') {
//     echo json_encode($result);
//   } else {
//     echo mysqli_affected_rows($con);
//   }
 
$con->close();