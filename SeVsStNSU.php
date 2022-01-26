<?php 
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sms";

$conn = mysqli_connect($servername, $username, $password, $dbname);

//$sql = "SELECT playerId,score FROM ctable2";
//$sql ="SELECT year,Count(*) AS cc FROM studentt WHERE university = 'AIUB' GROUP BY year";
$sql = "SELECT semester ,COUNT(*) AS cc FROM studentt WHERE university='NSU' GROUP BY semester";
//$sql2 = "SELECT university,year FROM studentt";




$result = $conn -> query($sql) or die();

$data = array();

foreach ($result as $row) {
	$data[] = $row;
}

$result->close();
$conn->close();

echo json_encode($data);

 ?>