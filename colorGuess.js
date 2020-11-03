var numSquares=6;
var color=[];
var pickedColor;
var h1= document.querySelector("h1");
var square = document.querySelectorAll(".square");
var message =document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var newColors = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");




init();

function init(){
	buttonModes();
	setUpBoxes();
	reset();
}

function buttonModes(){
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=="Easy"){
			numSquares=3;
		}
		else{
			numSquares=6;
		}
		reset();
	});
	}
}

//ADDING COLOR TO THE BOXES
function setUpBoxes(){
	for(var i=0; i< square.length; i++){
	square[i].style.backgroundColor = color[i];

	// ADDING CLICK EVENT TO EACH OF THE COLORED BOX
	square[i].addEventListener("click", function(){
	// SELECTING THE COLOR OF THE CLICKED BOX
		var select = this.style.backgroundColor;
	// COMPARING THE COLORS
		if(select===pickedColor){
			message.textContent = "Correct";
			newColors.textContent = "Play Again";
			changeColor(select); //to change color of all boxes
			// h1.style.backgroundColor= select;
		}
		else{
			this.style.backgroundColor= " #aedbf2";
			message.textContent = "Try again";
		}
	});
}
}


//FUNCTION TO RESET COLOR ACCORDING TO DIFFICULTY MODE AND TO START A NEW GAME
function reset(){
	message.textContent= " ";
	newColors.textContent="New Colors"
	//generate all new colors
	color = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < square.length; i++) {
		if(color[i]){
			square[i].style.display = "block";
			square[i].style.background = color[i];
		}
		else{
			square[i].style.display = "none";
		}
		
	}
}



//ADDING FUNCTIONALITY TO THE NEW COLOR BUTTON 
newColors.addEventListener("click",function(){
	reset();
});





function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

//FUNTION TO CHANGE THE COLOR OF ALL BLOCKS TO THE CORRECT COLOR
function changeColor(select){
	for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor = select; 
	}
}


//FUNCTION TO PICK A RANDOM COLOR
function generateRandomColor(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//function to geneare RGB code
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}














