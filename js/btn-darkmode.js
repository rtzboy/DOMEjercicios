const d = document;
let sun = "☀️";
let moon = "🌙";
const darkMode = (btnDark, spanBtn) => {
  //set attribute to html
  d.documentElement.setAttribute("data-theme", "light");

  d.addEventListener("click", evt => {
    if (evt.target.matches(btnDark) || evt.target.matches(`${btnDark} *`)) {
      // get the current selected theme, should be "light"
      const currentTheme = d.documentElement.getAttribute("data-theme");

      //swtich beetwen themes
      const switchTheme = currentTheme === "dark" ? "light" : "dark";

      // change icon buttons
      let $moon = d.querySelector(spanBtn).textContent;
      let $moonContent = d.querySelector(spanBtn);

      const changeIconButton = $moon === moon ? ($moonContent.textContent = sun) : ($moonContent.textContent = moon);

      //  set theme
      d.documentElement.setAttribute("data-theme", switchTheme);
    }
  });
};

export { darkMode };
