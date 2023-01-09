"use strict";
import { canvas, c } from "./modules/GameSet.js";
import { paddleLeft, paddleRight } from "./modules/Paddle.js";
import { ball } from "./modules/Ball.js";

window.addEventListener("load", animate);

// Start button
export const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", start);

// Game start
export function start() {
  ball.loop();
  addEventListener("keydown", keyDown);
  addEventListener("keyup", keyUp);
  startButton.removeEventListener("click", start);
}

// Timer
function animate() {
  // clean canvas while loop
  c.clearRect(0, 0, canvas.width, canvas.height);

  // plauground background
  c.beginPath();
  c.fillStyle = "#f1c453";
  c.fillRect(0, 0, canvas.width, canvas.height);

  ball.move();
  paddleLeft.move();
  paddleRight.move();

  requestAnimationFrame(animate);
}

// Paddle controller
export function keyDown(e) {
  e = e || window.event;
  let paddleSpeed = 4;
  switch (e.key) {
    case "Shift":
      paddleLeft.speedY = -paddleSpeed;
      break;
    case "Control":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "ArrowUp":
      paddleRight.speedY = -paddleSpeed;
      break;
    case "ArrowDown":
      paddleRight.speedY = paddleSpeed;
      break;
  }
}

export function keyUp(e) {
  e = e || window.event;
  let paddleSpeed = 0;
  switch (e.key) {
    case "Shift":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "Control":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "ArrowUp":
      paddleRight.speedY = paddleSpeed;
      break;
    case "ArrowDown":
      paddleRight.speedY = paddleSpeed;
      break;
  }
}
