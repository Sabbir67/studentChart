function ddta(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/data.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			//console.log(data[1]);
			
			for(let i = 0 ; i < data[0].length; i++){
				console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				score2.push(""+data[1][i].cc);
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Data 1",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data: score
				},{
            	label: "Data 2",
           		 backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score2
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});



}
//=============================

function ddta2(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/data2.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push("Year "+data[i].year);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Enrollment Year Vs Student",
            	
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=============================

function UnVsStF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/UnVsSt.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].university);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Year Vs Student",
           		 backgroundColor: ['rgb(255, 102, 102)','rgb(102, 255, 255)','rgb(255, 102, 217)','rgb(255, 217, 102)'],
            	borderColor: 'rgb(230, 0, 0)',
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'pie',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=================================
function StVsDpF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/StVsDp.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].major);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Student Vs Department From All University",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//=========================================================

function DpVsStIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/DpVsStIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].major);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (IUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//========================

function ScVsDpIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsDpIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (IUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//=================================
function ScVsDpAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsDpAIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (AIUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//===========================
function ScVsDpNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsDpNSU.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (NSU)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//======================================
function ScVsDpBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsDpBRAC.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (BRAC)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//=======================================
function DpVsStAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/DpVsStAIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].major);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (AIUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//============================
function DpVsStNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/DpVsStNSU.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].major);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (NSU)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//==============================
function DpVsStBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/DpVsStBRAC.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].major);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Department Vs Student (BRAC)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=================================
function ScVsDpF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsDp.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Student Vs Department All ",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//======================================
function ScVsStIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsStIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "School Vs Student(IUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=================================
function ScVsStAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsStAIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "School Vs Student(AIUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//====================================
function ScVsStNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsStNSU.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "School Vs Student(NSU)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=======================================
function ScVsStBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/ScVsStBRAC.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].school);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "School vs Student(BRAC)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//===========================================
function YeVsStIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].year);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Year vs Student(IUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//==============================
function YeVsStAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStAIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].year);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Year vs Student(AIUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//====================================
function YeVsStNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStNSU.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].year);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Year vs Student(NSU)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//===============================
function YeVsStBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStBRAC.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].year);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "Year vs Student(BRAC)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//====================================
function SeVsStF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsSt.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].semester);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "semester vs Student All ",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}

//================================
function SeVsStIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].semester);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "semester vs Student(IUB)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//============================
function SeVsStAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStAIUB.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].semester);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "semester vs Student(AIUB) ",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//=========================================
function SeVsStNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStNSU.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].semester);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "semester vs Student(NSU) ",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//===================================
function SeVsStBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStBRAC.php",
		method: "GET",
		success:function(data){
			console.log(data);
			var player =[];
			var score = [];
			console.log(data[1]);

			for(var i in data){
				player.push(""+data[i].semester);
				score.push(data[i].cc);
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "semester vs Student(BRAC)",
           		
           		backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(230,0,0)',
            	hoverBackgroundColor: "rgba(232,105,90,0.8)",
            	hoverBorderColor: "orange",
            	data: score
				}
			]
		};

			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});

		},
		error: function(data){
			console.log(data);
		}
	});
});
}
//===================================
//===============================
//==========================
function YeVsStComIUBVsAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComIUBVsAIUB.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "AIUB yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});



}
//============================================
function YeVsStComIUBVsNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComIUBVsNSU.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "NSU yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}

//============================

function YeVsStComIUBVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComIUBVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//=======================================
function YeVsStComAIUBVsNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComAIUBVsNSU.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "NSU yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "AIUB yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//===========================================
function YeVsStComAIUBVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComAIUBVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "AIUB yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//=========================================
function YeVsStComNSUVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/YeVsStComNSUVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].year);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC yearly Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "NSU yearly Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}

//==========================================
function SeVsStComIUBVsAIUBF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComIUBVsAIUB.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "AIUB Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//===========================================
function SeVsStComIUBVsNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComIUBVsNSU.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "NSU Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//============================================
function SeVsStComIUBVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComIUBVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "IUB Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//=============================
function SeVsStComAIUBVsNSUF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComAIUBVsNSU.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "NSU Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "AIUB Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//===============================================

function SeVsStComAIUBVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComAIUBVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "AIUB Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}
//====================================================================
function SeVsStComNSUVsBRACF(){
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/Chart/SeVsStComNSUVsBRAC.php",
		method: "GET",
		dataType:'json',
		success:function(data){

			//console.log(data);
			var player =[];
			var score = [];
			var score2 =[];
			//score.push(0);
			//score2.push(0);
			
			
			for(let i = 0 ; i < data[0].length; i++){
				//console.log(data[0][i]);
				player.push(""+data[0][i].semester);
				score.push(data[0][i].cc);
			}
			for(let i = 0 ; i < data[1].length; i++){
				//console.log(data[1][i]);
				
				if(data[0][i] == 0){
					score2.push(1);
					console.log(data[0][i]);

				}else{
					score2.push(data[1][i].cc);
					console.log(data[0][i]);
				}
				
				
			}

			var chartdata = {
				labels: player,
				datasets: [{
            	label: "BRAC Semester wise Student",
           		 backgroundColor: 'rgb(64, 81, 196)',
            	borderColor: 'rgb(0, 0, 0)',
            	data:score2
				},
				{
            	label: "NSU Semester wise Student ",
           		backgroundColor: 'rgb(255, 40, 17)',
            	borderColor: 'rgb(255, 99, 132)',
            	data: score
            	
				}
			]
		};


			var ctx = $("#mycanvas");
			var barGraph = new Chart(ctx,{
				type : 'bar',
				data:chartdata
			});




		},
		error: function(data){
			console.log(data);
			//console.log('foo');
		}
	});
});

}





