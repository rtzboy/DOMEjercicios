export default function hamburgerMenu(pnlButton, pnlNav, nav_item) {
  const d = document;

  d.addEventListener("click", evt => {
    if (evt.target.matches(pnlButton) || evt.target.matches(`${pnlButton} *`)) {
      d.querySelector(pnlButton).classList.toggle("is-active");
      d.querySelector(pnlNav).classList.toggle("is-ve");
    }

    if (evt.target.matches(nav_item)) {
      d.querySelector(pnlButton).classList.remove("is-active");
      d.querySelector(pnlNav).classList.remove("is-ve");
    }
  });
}
