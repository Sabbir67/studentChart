<?php 
header('Content-Type: application/json');

//$sql = "SELECT playerId,score FROM ctable2";
//$sql = "SELECT major,year FROM studentt";
$sql = "SELECT semester ,COUNT(*) AS cc FROM studentt WHERE university='IUB' GROUP BY semester";
$sql2 ="SELECT semester ,COUNT(*) AS cc FROM studentt WHERE university='BRAC' GROUP BY semester";
//$sql2 = "SELECT university,year FROM studentt";



function temp($sql){
	$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sms";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$result = $conn -> query($sql) or die();
//$result2 =compact($result);
$data = array();


foreach ($result as $row) {
	$data[] = $row;
}
return $data;
}
$data = temp($sql);
$data2 = temp($sql2);



echo json_encode(array($data,$data2));


 ?>