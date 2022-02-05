import { ageToDays } from "./age-day.js";
import { alarm, clock } from "./clock.js";
import { moveBall, resetButton, shortCts, testUp } from "./keyevts.js";
import hamburgerMenu from "./menu-ham.js";
import tempo from "./tempo.js";
// import { tempo } from "./tempo.js";

const d = document;

d.addEventListener("DOMContentLoaded", evt => {
  hamburgerMenu(".hamburger", ".nav", ".nav_list a");
  ageToDays(".btnStart", ".btnReset", ".container_item3");
  clock(".btn1", ".btn2");
  alarm(".btn3", ".btn4");
  resetButton(".btn_reset", ".circle");
  tempo(".temporizador");
});

d.addEventListener("keydown", evt => {
  shortCts(evt);
  moveBall(".circle", ".board", evt);
});

d.addEventListener("keyup", evt => {
  testUp(evt);
});
