<?php


session_start();
if(session_destroy()) // Destroying All Sessions
{
header("Location: mainMenu.php"); // Redirecting To Home Page
}
?>