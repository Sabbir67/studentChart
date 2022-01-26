<!DOCTYPE html>
<html>
<head>
	<title>Student Enrollment</title>
	<style type="text/css">
		*{
			padding: 0px;
			margin:0px;
			
		}
		#container{

		}
		#container ul {
			
			list-style: none;
		}
		#container ul li {
			background-color: yellow;
			width: 200px;
			border: 1px solid white;
			height: 50px;
			line-height: 50px;
			text-align: center;
			
			font-size: 20px;
			position: relative;

		}
		#container ul li:hover{
			background-color: red;
		}
		#container li{

		}
		#container ul ul{
			margin-left:200px;
			float: left;
			display: none;
			

		}
		#container ul li:hover > ul{
			display: block;
		}
		#container ul ul ul {
			margin-left: 200px;
			width: 300px;
			top:0px;
			position:absolute;
		}

	</style>
</head>
<body>
	<div id="container">
		<ul>
			<li>Home</li>
			<li>University
				<ul>
					<li>IUB
						<ul>
							<li>NN</li>
							<li>NN</li>
						</ul>
						
					</li>
					<li>BRAC</li>

				</ul>

			</li>
			<li>University
				<ul>
					<li>IUB</li>
					<li>AIUB
						<ul>
							<li>Department Vs Student</li>
							<li>Department Vs Student</li>
						</ul>
					</li>
					<li>NSU</li>
					<li>BRAC</li>
				</ul>
				
			</li>
		</ul>

	</div>

</body>
</html>