var world = document.getElementById("world");
var player = document.getElementById("player");

player.addEventListener('keypress', Space);

function Space() {
  player.style.bottom = "5px";
}