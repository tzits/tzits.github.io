function Board() {
}

Board.prototype.create = function(div) {
	var body = document.getElementById(div)
	var container = document.createElement("div")
	for(var i = 0; i < 10; i++) {
    	for (var j = 0; j < 10; j++){
        	var box = document.createElement("div")
        	box.setAttribute("class", "box")
        	box.setAttribute("id", "" + i + j + "");
        	container.appendChild(box)
    	}
    	var clearIt = document.createElement("div")
    	clearIt.setAttribute("clear","both")
    	clearIt.setAttribute("class","clearIt")
    	container.appendChild(clearIt)
	}

	body.appendChild(container)
}

Board.prototype.create2 = function(div){
	var body = document.getElementById(div)
	var container = document.createElement("div")
	for(var i = 0; i < 10; i++) {
    	for (var j = 0; j < 10; j++){
        	var box = document.createElement("div")
        	box.setAttribute("class", "box")
        	box.setAttribute("id", "1" + i + j + "");
        	container.appendChild(box)
    	}
    	var clearIt = document.createElement("div")
    	clearIt.setAttribute("clear","both")
    	clearIt.setAttribute("class","clearIt")
    	container.appendChild(clearIt)
	}

	body.appendChild(container)
}



var shoot = function() {
	if (shotNumber % 2 === 0) {
		whoShoots()
		var target = prompt("Fire When Ready");
		if (target.length == 3 && target[1] + target[2] == "10") {
			var newLat = 9;
		}
		else if (target.length == 3 && target[1] + target[2] != "10") {
			alert("You missed the board")
		}
		else {
			var lat = target[1]
			var newLat = parseInt(lat)-1
		}
		var long = target[0]
		switch(long) {
			case 'A':
			var newLong = 0
			break;
			case 'B':
			var newLong = 1
			break;
			case 'C':
			var newLong = 2
			break;
			case 'D':
			var newLong = 3
			break;
			case 'E':
			var newLong = 4
			break;
			case 'F':
			var newLong = 5
			break;
			case 'G':
			var newLong = 6
			break;
			case 'H':
			var newLong = 7
			break;
			case 'I':
			var newLong = 8
			break;
			case 'J':
			var newLong = 9
			break;
			default:
			alert("lousy shot")
			}
		checkHit(newLat,newLong)
		}
	else {
		alert("Not Your Turn")
	}
}

var checkHit = function(a,b) {
	var myShips =
		[[null,null,null,null,null,null,null,null,null,"x"],
	 	[null,null,null,null,null,null,null,null,null,"x"],
	 	[null,null,null,null,null,null,null,null,null,"x"],
	 	[null, "x", "x", "x", "x",null,null,null,null,null],
	 	[null,null,null,null,null,null,null,null,null,null],
	 	["x",null,null,null,null,null,null,null,null,null],
	 	["x",null,null,null,null,null,null,null,null,null],
	 	["x",null,null,null,null,"x","x","x",null,null],
	 	["x",null,null,"x",null,null,null,null,null,null],
	 	["x",null,null,"x",null,null,null,null,null,null]]
	if (myShips[a][b]) {
		var hit = document.getElementById(a + "" + b)
		hit.style.backgroundColor = "yellow";
		myShips[a][b] = null;
		countRightClicks();
		checkWinnerRight()
		return "You Hit My Ship"
	}
	else {
		var miss = document.getElementById(a + "" + b)
		miss.style.backgroundColor = "rgba(0,0,0,0)";
		return "You Missed"
	}
}

var shootRight = function() {
	if (shotNumber % 2 !== 0) {
		var target = prompt("Fire When Ready");
		whoShoots()
		if (target.length == 3 && target[1] + target[2] == "10") {
			var newLat = 9;
		}
		else if (target.length == 3 && target[1] + target[2] != "10") {
			alert("You missed the board")
		}
		else {
			var lat = target[1]
			var newLat = parseInt(lat)-1
		}
		var long = target[0]
		switch(long) {
			case 'A':
			var newLong = 0
			break;
			case 'B':
			var newLong = 1
			break;
			case 'C':
			var newLong = 2
			break;
			case 'D':
			var newLong = 3
			break;
			case 'E':
			var newLong = 4
			break;
			case 'F':
			var newLong = 5
			break;
			case 'G':
			var newLong = 6
			break;
			case 'H':
			var newLong = 7
			break;
			case 'I':
			var newLong = 8
			break;
			case 'J':
			var newLong = 9
			break;
			default:
			alert("lousy shot")
		}
		checkHitRight(newLat,newLong)
		}
	else {
		alert("Not Your Turn")
	}
}

var checkHitRight = function(a,b) {
	var myShips =
		[[null,null,null,null,"x","x","x",null,null,null],
	 	[null,null,null,null,null,null,null,null,null,null],
	 	[null,null,null,null,null,null,null,null,null,null],
	 	[null, "x", null, null, null,null,null,null,null,"x"],
	 	[null,"x",null,null,null,"x","x","x",null,"x"],
	 	[null,"x",null,"x",null,null,null,null,null,null],
	 	[null,"x",null,"x",null,null,null,null,null,null],
	 	[null,"x",null,"x",null,null,null,null,null,null],
	 	[null,null,null,"x",null,null,null,null,null,null],
	 	[null,null,null,null,null,null,null,null,null,null]]
	if (myShips[a][b]) {
		var hit = document.getElementById("1" + a + b)
		hit.style.backgroundColor = "yellow";
		myShips[a][b] = null;
		countClicks()
		checkWinner()
	}
	else {
		var miss = document.getElementById("1" + a + b)
		miss.style.backgroundColor = "rgba(0,0,0,0)";
		return "You Missed"

	}

}


Board.prototype.buttonLeft= function() {
	var body = document.getElementById("pThree");
	var button = document.createElement("button");
	button.className ="button"
	button.setAttribute("onclick", "shootRight()");
	button.innerHTML = "Where Should I Look?"
	body.appendChild(button)
}

Board.prototype.buttonRight= function() {
	var body = document.getElementById("pFour");
	var button = document.createElement("button");
	button.className = "button"
	button.setAttribute("onclick", "shoot()");
	button.innerHTML = "Where Should I Look?"
	body.appendChild(button)
}

function letsBegin() {
	window.onload = function() {}
	if (document.getElementById("00")) {
		return "Stop"
	}
	else {
		var board = new Board()
		board.create("pOne");
		board.create2("pTwo");
		board.buttonLeft();
		board.buttonRight();
		var origin = document.getElementById("origin");
		origin.style.display = "none";
		var intro = document.getElementById("intro");
		intro.style.display = "none"
	}
}

var count = 0;
function countClicks() {
	count = count + 1;
}
var countRight = 0;
function countRightClicks() {
	countRight = countRight + 1;
}
var shotNumber = 1
function whoShoots() {
	shotNumber = shotNumber + 1;
}

function checkWinner() {
	if (count === 17){
		alert("Game Over");
		var body = document.querySelector("body");
		var pOne = document.getElementById("pOne");
		var pTwo = document.getElementById("pTwo");
		body.removeChild(pOne)
		body.removeChild(pTwo)
		var magic = document.getElementById("restart");
		body.style.backgroundImage = "url('https://media.licdn.com/mpr/mpr/p/6/005/09a/123/349a9d5.jpg')"
		magic.style.display="block"
		}
	}

function checkWinnerRight() {
	if (countRight === 17) {
		alert("Game Over");
		var body = document.querySelector("body");
		var pOne = document.getElementById("pOne");
		var pTwo = document.getElementById("pTwo");
		body.removeChild(pOne)
		body.removeChild(pTwo)
		var magic = document.getElementById("restart");
		body.style.backgroundImage = "url('https://media.licdn.com/mpr/mpr/p/6/005/09a/123/349a9d5.jpg')"
		magic.style.display="block"
	}
}

function restart() {
	location.assign(location);
}
