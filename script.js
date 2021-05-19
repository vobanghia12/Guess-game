"use strict";
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const display = function (result) {
  document.querySelector(".message").textContent = result;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  let input = Number(document.querySelector(".input-data").value);
  if (!input) display("You have to type your input!");
  else if (input === random) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".secret-number").textContent = random;
    document.querySelector(".secret-number").style.padding = "5rem";
    document.querySelector("body").style.backgroundColor = "rgb(66, 245, 138)";
    disableFunction();
    display("You win the game!");
  } else {
    if (score > 1) {
      display(input > random ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      display("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".secret-number").style.padding = "3rem";
  document.querySelector(".input-data").value = "";
  display("Start guessing...");
});
