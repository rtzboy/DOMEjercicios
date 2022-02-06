const d = document;
const w = window;

export default function moveTop(btnUpClass, btnClickUp) {
  checkScroll(btnUpClass);
  clickToUp(btnClickUp);
}

function checkScroll(classEvt) {
  w.addEventListener("scroll", evt => {
    if (w.scrollY > 1400) {
      d.querySelector(classEvt).classList.add("mybtnUp-is-enable");
    }
    if (w.scrollY <= 1400) {
      d.querySelector(classEvt).classList.remove("mybtnUp-is-enable");
    }
  });
}

function clickToUp(evtClick) {
  d.addEventListener("click", evt => {
    if (evt.target.matches(evtClick) || evt.target.matches(`${evtClick} *`)) {
      w.scroll(0, 0);
    }
  });
}

// visibility: hidden;
