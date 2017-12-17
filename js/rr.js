// Javascript for Rocket Racers
//by : Mike Boracci
//date: 12/11/2017



"use strict";

// Global Variables

var statusCells = ["6s", "9s", "11s", "3s", "5s"];

function updateGrid() {
   var time = document.getElementById("timeSlot").value;
   var vehicle = document.getElementById("vehicleSel").value;

         if (time === "6"){
			document.getElementById("6s").innerHTML = "Booked";
			document.getElementById("6v").innerHTML = vehicle;
		 } else if (time === "9"){
			document.getElementById("9s").innerHTML = "Booked";
			document.getElementById("9v").innerHTML = vehicle;
		 } else if (time === "11"){
			document.getElementById("11s").innerHTML = "Booked";
			document.getElementById("11v").innerHTML = vehicle;
		 } else if (time === "3"){
			document.getElementById("3s").innerHTML = "Booked";
			document.getElementById("3v").innerHTML = vehicle;
		 } else if (time === "5"){
			document.getElementById("5s").innerHTML = "Booked";
			document.getElementById("5v").innerHTML = vehicle;
		 }			

}

function blockCells(){
		var choice=document.getElementById("timeSlot")
		for (var i = 0; i < choice.length; i++){
		if (choice.options[i].value == 'Booked' )
		choice.remove(i);
		}
	
		console.log(choice);	
}
		
		

/*window.onload = function createEventListeners (){
	document.getElementById("submit1").addEventListener("click", blockCells());


}*/
