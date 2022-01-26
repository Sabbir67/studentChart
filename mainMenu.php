<?php
include('login.php'); // Includes Login Script
if(isset($_SESSION['login_user'])){
header("location: profile.php"); // Redirecting To Profile Page
}
?> 

<!DOCTYPE html>
<html>
<head>
  <title>Login Form </title>
  <link href="style.css" rel="stylesheet" type="text/css">

  <style type="text/css">
    h1{
      text-align: center;
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <h1>Student Enrollment Database Management System</h1>
 <div id="login">
  <h2>Login Form</h2>
  <form action="" method="post">
   <label>UserName :</label>
   <input id="name" name="username" placeholder="username" type="text">
   <label>Password :</label>
   <input id="password" name="password" placeholder="**********" type="password"><br><br>
   <input name="submit" type="submit" value=" Login ">
   <span><?php echo $error; ?></span>
  </form>
 </div>
</body>
</html>