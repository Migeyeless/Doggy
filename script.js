score = 0;
cross = true;

audiogo = new Audio('/Migeyeless/dogded.mp3');
audio = new Audio('/Migeyeless/game.mp3');
setTimeout(() => {
  audio.play()
}, 100);

document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    dog = document.querySelector(".dog");
    dog.classList.add("animateDog");
    setTimeout(() => {
      dog.classList.remove("animateDog");
    }, 700);
  }
  if (e.keyCode == 39) {
    dog = document.querySelector(".dog");
    dogX = parseInt(
      window.getComputedStyle(dog, null).getPropertyValue("left")
    );
    dog.style.left = dogX + 100 + "px";
  }
  if (e.keyCode == 37) {
    dog = document.querySelector(".dog");
    dogX = parseInt(
      window.getComputedStyle(dog, null).getPropertyValue("left")
    );
    dog.style.left = dogX - 100 + "px";
  }
};
setInterval(() => {
  dog = document.querySelector(".dog");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dog, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dog, null).getPropertyValue("bottom"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("bottom")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  //console.log(offsetX,offsetY)
  if (offsetX < 88 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");
    audiogo.play();
    setTimeout(() => {
     audiogo.pause();
    }, 1000);
  } else if (offsetX < 140 && cross) {
    score = score + 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.01;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);
function updateScore(score) {
  scoreCount.innerHTML = "Your Score: " + score;
}
