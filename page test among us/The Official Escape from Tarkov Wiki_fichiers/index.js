var state = 0;
var ventOpen=new Audio("ventOpen.mp3");
var ventClose=new Audio("ventClose.mp3");
var kill=new Audio("kill.mp3");
var message=new Audio("ejectionLetters.mp3");
var Victory=new Audio("Victory.mp3");
var Defeat=new Audio("Defeat.mp3");
var ImpostorDead = 0;
var crewmateDead = 0;

function clickOnTrap(){
	//console.log("state"+state);
	if(state%2 == 0){
		var imagesOp = [];
		x = -1;

		imagesOp[0] = "trapClose.png";
		imagesOp[1] = "trapMid.png";
		imagesOp[2] = "trapImpostor.png";

		var setInterval_ID = setInterval(trapOpen, 250);

		function startTimer() {
			var setInterval_ID = setInterval(trapOpen, 250);
		}

		setTimeout(stop_interval, 750);


		function trapOpen(){
			x = (x === imagesOp.length - 1) ? 0 : x + 1;
			document.getElementById("trap").src = imagesOp[x];
			if(x==1){
				ventOpen.play();
			}
			//console.log("x"+x);
		}

		function stop_interval(){
			clearInterval(setInterval_ID);
		}		
	}
	else{
		var imagesCl = [];
		imagesCl[0] = "trapMid.png";
		imagesCl[1] = "trapClose.png";
		y = -1;
		
		var setInterval_ID1 = setInterval(trapClose, 250);

		function startTimer() {
			var setInterval_ID1 = setInterval(trapClose, 250);
		}

		setTimeout(stop_interval1, 500);


		function trapClose(){
			y = (y === imagesCl.length - 1) ? 0 : y + 1;
			document.getElementById("trap").src = imagesCl[y];
			if(y==1){
				ventClose.play();
			}
			//console.log("y"+y);
		}

		function stop_interval1(){
			clearInterval(setInterval_ID1);
		}		
	}
	state+=1;
}

function clickOnMarron(){
	var imageMarron=document.getElementById("Marron");
	imageMarron.src = "Dead_Marron.png";
	kill.play();
	alert("Marron was not The Impostor");
	crewmateDead+=1;
	Win();
}
function clickOnNoir(){
	var imageNoir=document.getElementById("Noir");
	imageNoir.src = "Dead_Noir.png";
	kill.play();
	alert("Noir was not The Impostor");
	crewmateDead+=1;
	Win();
}
function clickOnJaune(){
	var imageJaune=document.getElementById("Jaune");
	imageJaune.src = "Dead_Jaune.png";	
	kill.play();
	alert("Jaune was The Impostor");
	ImpostorDead+=1;
	Win();
}
function clickOnRose(){
	var imageRose=document.getElementById("Rose");
	imageRose.src = "Dead_Rose.png";
	kill.play();
	alert("Rose was not The Impostor");
	crewmateDead+=1;
	Win();
}
function clickOnRouge(){
	var imageRouge=document.getElementById("Rouge");
	imageRouge.src = "Dead_Rouge.png";
	alert("Rouge was The Impostor");
	kill.play();
	ImpostorDead+=1;
	Win();
}
function clickOnBleu(){
	var imageBleu=document.getElementById("Bleu");
	imageBleu.src = "Dead_Bleu.png";
	kill.play();
	alert("Bleu was not The Impostor");
	crewmateDead+=1;
	Win();
}
function clickOnVert(){
	var imageVert=document.getElementById("Vert");
	imageVert.src = "Dead_Vert.png";
	kill.play();
	alert("Vert was not The Impostor");
	crewmateDead+=1;
	Win();
}
function clickOnVert_Clair(){
	var imageVert_Clair=document.getElementById("Vert_Clair");
	imageVert_Clair.src = "Dead_Vert_Clair.png";
	kill.play();
	alert("Vert Clair was not The Impostor");
	crewmateDead+=1;
	Win();
}

function Win(){
	if(ImpostorDead>=2){
		Victory.play();
	}
	if(crewmateDead>=4){
		Defeat.play();
	}
}





