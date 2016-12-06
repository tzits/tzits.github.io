var divs = ["pOne","pTwo","pThree","pFour","pFive","pSix"];
var keysPressed = [false,false,false,false,false,false];
window.onkeydown = keyDownHandler; 
window.onkeyup = keyUpHandler;
var players = []

function Player(name, speed, classname) {
	this.winPosition = "1000px";
	this.losePosition = "100px";
	this.left = 10;
	this.speed = speed || 1;
	this.isMoving = false;
	this.name = name;
	this.classname = classname || "runner";
}
Player.prototype.create = function(div) {
    var x = document.createElement("IMG");
    x.setAttribute("class", this.classname);
	lane = document.getElementById(div);
	lane.appendChild(x);
}

function Button() {
}

var keys = [
	{
		name: "Q",
		code: 81,
	},
	{
		name: "Shift",
		code: 16,
	},
	{
		name: "F",
		code: 70,
	},
	{
		name: "8",
		code: 56,
	},
	{
		name: "J",
		code: 74
	},
	{	name: "/",
		code: 5
	}]

function dontMove() {
	keysPressed = false;
}


function createPlayer() {
	var playerCount = prompt("How many players shall there be?")
	if (!parseInt(playerCount)) {
		alert("please enter a number")
	} else if (playerCount >= 6) {
		alert("too many players competing");
	} else {
		for (var i = 0; i < playerCount; i++) {
			var name = prompt("What is your name player" + (i+1) + "?");
			if (name == "") {
				alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
			} else {
				var player = (name == "usain bolt") ? new Player("usain bolt", 50, "bolt") : new Player(name);
				players.push(player)
				player.create(divs[i])
			}
			alert('You will use key ' + keys[i].name + ' to move')
		}
	}
}
function keyDownHandler(e) {
	for (var i = 0; i < players.length; i++) {
		if (e.keyCode == keys[i].code) {
			players[i].isMoving = true;
		}
	}
}

function keyUpHandler(e) {
	for (var i = 0; i < players.length; i++) {
		if (e.keyCode == keys[i].code) {
			players[i].isMoving = false
		}
	}
}

function updateKeys() {
	for (var i = 0; i < players.length; i++) {
		if (players[i].isMoving) {
			players[i].left = players[i].left + players[i].speed;
			document.getElementById(divs[i]).style.left = players[i].left + "px";
		}
	}
	whoWins()
}

function whoWins() {
	for (var i = 0; i < players.length; i++) {
		if (players[i].left >= 950) {
			var d = document.getElementById(divs[i])
			d.style.left = players[i].winPosition;
			players[i].isMoving = false;
			alert('The Winner is ' + players[i].name + '!');
			players.splice(i,1);
			divs.splice(i,1);
			var myButton = document.getElementById("right");
			myButton.style.backgroundColor = "red";
			for (var i = 0; i < players.length; i++) {
				document.getElementById(divs[i]).style.left = players[i].losePosition;
				players[i].isMoving = false
			}
			return
		}
	}
}
function restart() {
	location.assign(location);
}
setInterval(updateKeys, 1);
