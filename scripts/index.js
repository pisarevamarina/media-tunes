import { radioPlayerInit } from "./radioPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

const deactivatePlayer = () => {
  temp.style.display = "none";
  playerBtn.forEach((btn) => btn.classList.remove("active"));
  playerBlock.forEach((block) => block.classList.remove("active"));
};

playerBtn.forEach((btn, i) => btn.addEventListener("click", () => {
    deactivatePlayer();
    btn.classList.add("active");
    playerBlock[i].classList.add("active");
  })
);
