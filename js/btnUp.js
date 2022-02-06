const d = document;
const w = window;

export default function moveTop(btnUpClass) {
  checkScroll(btnUpClass);
}

function checkScroll(classEvt) {
  w.addEventListener("scroll", evt => {
    if (w.scrollY > 1400) {
      console.clear();
      console.log(w.scrollY);
      d.querySelector(classEvt).classList.add("mybtnUp-is-enable");
    }
    if (w.scrollY <= 1400) {
      console.clear();
      console.log(w.scrollY);
      d.querySelector(classEvt).classList.remove("mybtnUp-is-enable");
    }
  });
}

function getScroll() {
  return window.scrollY;
}

// visibility: hidden;
