<?php
include('session.php');

if(!isset($_SESSION['login_user'])){
header("location: mainMenu.php"); // Redirecting To Home Page
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>ChartJs_Bargraph</title>
	 <link rel="stylesheet" href="stylee.css">
	<style type="text/css">
		#chart-container{
			width: 800px;
			height: auto;
			margin-right: 150px;
			float: right;
		}
		#buttonD{
			padding-bottom: 10px;

		}
		#buttonD2{
			padding-bottom: 10px;
			margin-top: 10px;

		}
		#hgh{
			margin-left: 150px;
			margin-top: 100px;
		}
		body{
			background-color: rgb(113, 213, 167);
		}

	</style>
</head>
<body>
	<div id="chart-container">
	<canvas id="mycanvas"></canvas>
</div>


<!--  ===================================================   -->
<div id="hgh">
<div id='cssmenu'>
<ul>
   <li onclick="ddta2()"><a href='#'><span>Year Vs Student </span></a></li>
   <li onclick="UnVsStF()"><a href='#'><span>University Vs Student </span></a></li>
   <li onclick="StVsDpF()"><a href='#'><span>Student Vs Department</span></a></li>
   <li onclick="ScVsDpF()"><a href='#'><span>School Vs Department</span></a></li>
   <li onclick="SeVsStF()"><a href='#'><span>Semeter Vs Student</span></a></li>
   <li class='active has-sub'><a href='#'><span>University</span></a>
      <ul>
         <li class='has-sub' ><a href='#'><span> IUB </span></a>
            <ul>
               <li onclick="DpVsStIUBF()"><a href='#'><span>Department Vs Student (IUB)</span></a></li>
               <li onclick="ScVsDpIUBF()" class='last'><a href='#'><span>School Vs Department(IUB)</span></a></li>
               <li onclick="ScVsStIUBF()" class='last'><a href='#'><span>School Vs Student(IUB)</span></a></li>
               <li onclick="YeVsStIUBF()" class='last'><a href='#'><span>Year Vs Student(IUB)</span></a></li>
               <li onclick="SeVsStIUBF()" class='last'><a href='#'><span>Semester Vs Student(IUB)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> AIUB </span></a>
            <ul>
               <li onclick="DpVsStAIUBF()"><a href='#'><span>Department Vs Student (AIUB)</span></a></li>
               <li onclick="ScVsDpAIUBF()" class='last'><a href='#'><span>School Vs Department(AIUB)</span></a></li>
               <li onclick="ScVsStAIUBF()" class='last'><a href='#'><span>School Vs Student(AIUB)</span></a></li>
               <li onclick="YeVsStAIUBF()" class='last'><a href='#'><span>Year Vs Student(AIUB)</span></a></li>
               <li onclick="SeVsStAIUBF()" class='last'><a href='#'><span>Semester Vs Student(AIUB)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> NSU </span></a>
            <ul>
               <li onclick="DpVsStNSUF()"><a href='#'><span>Department Vs Student (NSU)</span></a></li>
               <li onclick="ScVsDpNSUF()"class='last'><a href='#'><span>School Vs Department(NSU)</span></a></li>
               <li onclick="ScVsStNSUF()" class='last'><a href='#'><span>School Vs Student(NSU)</span></a></li>
               <li onclick="YeVsStNSUF()" class='last'><a href='#'><span>Year Vs Student(NSU)</span></a></li>
               <li onclick="SeVsStNSUF()" class='last'><a href='#'><span>Semester Vs Student(NSU)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> BRAC </span></a>
            <ul>
               <li onclick="DpVsStBRACF()"><a href='#'><span>Department Vs Student (BRAC)</span></a></li>
               <li onclick="ScVsDpBRACF()" class='last'><a href='#'><span>School Vs Department(BRAC)</span></a></li>
               <li onclick="ScVsStBRACF()" class='last'><a href='#'><span>School Vs Student(BRAC)</span></a></li>
               <li onclick="YeVsStBRACF()" class='last'><a href='#'><span>Year Vs Student(BRAC)</span></a></li>
               <li onclick="SeVsStBRACF()" class='last'><a href='#'><span>Semester Vs Student(BRAC)</span></a></li>
            </ul>
         </li>
            <ul>
               <li><a href='#'><span>Sub Product</span></a></li>
               <li class='last'><a href='#'><span>Sub Product</span></a></li>
            </ul>
         </li>
      </ul>
   </li>


   <!-- =======================-->
   
   <!-- =======================
   
   
   
   
   
   
   
   
   
    -->
    <li class='active has-sub'><a href='#'><span>Compare</span></a>
      <ul>
         <li class='has-sub' ><a href='#'><span> IUB VS AIUB </span></a>
            <ul>
               <li onclick="YeVsStComIUBVsAIUBF()"><a href='#'><span>Year Vs Student (IUB & AIUB)</span></a></li>
               <li onclick="SeVsStComIUBVsAIUBF()" class='last'><a href='#'><span>Student Vs Semester(IUB Vs AIUB)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> IUB VS NSU </span></a>
            <ul>
               <li onclick="YeVsStComIUBVsNSUF()"><a href='#'><span>Year Vs Student (IUB & NSU)</span></a></li>
               <li onclick="SeVsStComIUBVsNSUF()" class='last'><a href='#'><span>Student Vs Semester(IUB Vs NSU)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> IUB VS BRAC </span></a>
            <ul>
               <li onclick="YeVsStComIUBVsBRACF()"><a href='#'><span>Year Vs Student (IUB & BRAC)</span></a></li>
               <li onclick="SeVsStComIUBVsBRACF()" class='last'><a href='#'><span>Student Vs Semester(IUB Vs BRAC)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> AIUB VS NSU </span></a>
            <ul>
               <li onclick="YeVsStComAIUBVsNSUF()"><a href='#'><span>Year Vs Student (AIUB & NSU)</span></a></li>
               <li onclick="SeVsStComAIUBVsNSUF()" class='last'><a href='#'><span>Student Vs Semester(AIUB Vs NSU)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> AIUB VS BRAC </span></a>
            <ul>
               <li onclick="YeVsStComAIUBVsBRACF()"><a href='#'><span>Year Vs Student (AIUB & BRAC)</span></a></li>
               <li onclick="SeVsStComAIUBVsBRACF()" class='last'><a href='#'><span>Student Vs Semester(AIUB Vs BRAC)</span></a></li>
            </ul>
         </li>

         <li class='has-sub' ><a href='#'><span> NSU VS BRAC </span></a>
            <ul>
               <li onclick="YeVsStComNSUVsBRACF()"><a href='#'><span>Year Vs Student (NSU & BRAC)</span></a></li>
               <li onclick="SeVsStComNSUVsBRACF()" class='last'><a href='#'><span>Student Vs Semester(NSU Vs BRAC)</span></a></li>
            </ul>
         </li>

         
      </ul>
   </li>


   <!-- =======================-->
<!-- 








     -->

   <li><a href='#'><span>About</span></a></li>
   <li class='last'><a href='logout.php'><span>Log Out</span></a></li>
</ul>
</div>
</div>

<!--  ===================================================   -->
	<!-- <button onclick="ddta()" id="buttonD">Year vs Student Enrollme</button><br>
	<button onclick="ddta2()" id="buttonD2">Year Vs Student Enrollment</button> <br>
	<button onclick="UnVsStF()" id="buttonD2">University Vs Student Enrollment</button><br>
	<button onclick="UnVsStF()" id="buttonD2">University Vs Student Enrollment</button><br> -->

	
	


<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/Chart.min.js"></script>
<script type="text/javascript" src="js/app.js"></script>
<script type="text/javascript" src="js/test.js"></script>
</body>
</html>