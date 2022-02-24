import { ageToDays } from "./age-day.js";
import browserInformation from "./browser.js";
import { darkMode } from "./btn-darkmode.js";
import moveTop from "./btnUp.js";
import busqueda from "./busqueda.js";
import showCamera from "./camera.js";
import { alarm, clock } from "./clock.js";
import showGeolalization from "./geoloca.js";
import scrollMark from "./intersccion.js";
import { moveBall, resetButton, shortCts, testUp } from "./keyevts.js";
import hamburgerMenu from "./menu-ham.js";
import network from "./network.js";
import regForm from "./reg-form.js";
import newURL from "./responsive-tster.js";
import responsiveMedia from "./responsive_design.js";
import slideResponsive from "./slide-responsive.js";
import smartVideo from "./smart-video.js";
import sorteo from "./soteo.js";
import tempo from "./tempo.js";

const d = document;

d.addEventListener("DOMContentLoaded", evt => {
  hamburgerMenu(".hamburger", ".nav", ".nav_list a");
  ageToDays(".btnStart", ".btnReset", ".container_item3");
  clock(".btn1", ".btn2");
  alarm(".btn3", ".btn4");
  resetButton(".btn_reset", ".circle");
  tempo(".temporizador");
  moveTop(".mybtnUp", ".btnUp");
  darkMode(".btnDarkMode", ".btcnUp-Arrow");
  responsiveMedia(
    "gmaps",
    "(min-width: 1360px)",
    `<a href="https://www.google.com/maps/@-12.0123962,-77.0574007,18.25z" target="_blank">VerMapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.2061826350377!2d-77.05732802412126!3d-12.012311592817056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cee2704f732b%3A0xa0691c9da25639bb!2sFiori%2C%20San%20Mart%C3%ADn%20de%20Porres%2015102!5e0!3m2!1sen!2spe!4v1644540424865!5m2!1sen!2spe" width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveMedia(
    "gyoutube",
    "(min-width: 1360px)",
    `<a href="https://youtu.be/Le_IyYLrUtQ" target="_blank">VerVideo</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/8Bo7TVZAwTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  newURL("formtester");
  browserInformation("user_agent");
  // showCamera();
  showGeolalization();
  busqueda();
  sorteo(".btn_list_giveaway");
  slideResponsive(".container_img_txt");
  scrollMark();
  smartVideo();
  regForm();
});

d.addEventListener("keydown", evt => {
  shortCts(evt);
  moveBall(".circle", ".board", evt);
});

d.addEventListener("keyup", evt => {
  testUp(evt);
});

network(".status_web");
