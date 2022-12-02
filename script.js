// VARIABLES
let playerLengh = 20;
var playerColor = "#000";
var speed = 20;
var playerJump = 40;

let gameWidth = 500;
let gameHeight = 500;

let space = 0;
let left = 0;

const world = document.getElementById("world");
const player = document.getElementById("player");

// WORLD CREATION

world.style.width = `${gameWidth}px`;
world.style.height = `${gameHeight}px`;

const Init = () => {
  player.style.width = `${playerLengh}px`;
  player.style.height = `${playerLengh}px`;
  player.style.bottom = '0px';
  player.style.left = `${left}px`;
  player.style.backgroundColor = playerColor;
}

Init()

window.addEventListener("keydown", (e) => {
  
  if (space > 0) {
    if (e.which == '40') {
      //down arrow
      space -= speed;
      player.style.bottom = `${space}px`;
    }
  }
  if (space < (gameHeight - playerLengh)) {
    if (e.which == '38') {
      //up arrow
      space += speed;
      player.style.bottom = `${space}px`;
    }
  }
  
  if (left > 0) {
    if (e.which == '37') {
      //left arrow
      left -= speed;
      player.style.left = `${left}px`;
    }
  }
  if (left < (gameWidth - playerLengh)) {
    if (e.which == '39') {
      //right arrow
      left += speed;
      player.style.left = `${left}px`;
    }
  }
  
 if (e.which == '32') {
    //right arrow
  }
});