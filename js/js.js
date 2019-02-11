console.log("hello page1");

let ball = document.querySelector(".nowdot");
let tela = document.querySelector(".tela");
let timeline = document.querySelector(".timeline");
let video = document.querySelector("video");
ball.style.left = "0%";

video.onplay = () => {
    ratio = Math.floor(video.currentTime / video.duration*100);
    ball.style.left = ratio;
};

ball.onmousedown = function(event) {
  // (1) start the process
  // (2) prepare to moving: make absolute and on top by z-index
  ball.style.position = "absolute";

  moveAt(event.pageX);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX) {
    console.log(parseInt(ball.style.left));

    if (parseInt(ball.style.left) >= 0) {
      if (parseInt(ball.style.left) <= 100) {
        ball.style.left = -13 + (pageX / timeline.offsetWidth) * 100 + "%";
      }
    }
    if (parseInt(ball.style.left) < 0) {
      ball.style.left = "0%";
    }
    if (parseInt(ball.style.left) > 100) {
      ball.style.left = "100%";
    }
    //ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX);
  }

  // (3) move the ball on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  tela.onmouseup = function() {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };
};

ball.ondragstart = function() {
  return false;
};
