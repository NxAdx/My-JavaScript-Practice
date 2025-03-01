const mario = document.getElementById("mario");
const enemy = document.getElementById("enemy");
const gameBox = document.getElementById("game");

function jump() {
  if (mario.classList != "jumps") {
    mario.classList.add("jumps");
  }
  setTimeout(function () {
    mario.classList.remove("jumps");
  }, 500);
}

// var checkDead = setInterval (function f
// var characterTop =
// parseInt (window. getComputedStyle(character).
// getPropertyValue ("top") ) ;
// var blockLeft =
// parseInt (window. getComputedStyle(block) .getP
// ropertyValue ("left")) ;
// if(blockLeft<20 && blockLeft>0 &&
// characterTop>=130){|
// block. style.animation = "none";
// block. style.display = "none";
// alert("u lose.") ;
// }
// 3, 10) ;
let checkDead = setInterval(function () {
  let marioTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue("top")
  );
  let enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue("left")
  );
  if(enemyLeft<20 && enemyLeft>0 && marioTop>=130){
    enemy.style.animation = "none";
    enemy.style.display = "none";
    // gameBox.style.display = "none";
    alert("lost");
  }
},10);
