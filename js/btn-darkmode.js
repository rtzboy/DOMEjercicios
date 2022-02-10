const d = document;
let sun = "☀️";
let moon = "🌙";
const darkMode = (btnDark, spanBtn) => {
  let theme = localStorage.getItem("data-theme");
  let $moonContent = d.querySelector(spanBtn);
  const enableDarkMode = () => {
    d.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    $moonContent.textContent = sun;
  };
  const enableLightMode = () => {
    d.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
    $moonContent.textContent = moon;
  };
  if (theme === "dark") {
    enableDarkMode();
    $moonContent.textContent = sun;
  }
  d.addEventListener("click", evt => {
    if (evt.target.matches(btnDark) || evt.target.matches(`${btnDark} *`)) {
      let theme = localStorage.getItem("data-theme");
      if (theme === "dark") {
        enableLightMode();
      } else {
        enableDarkMode();
      }
    }
  });
};

export { darkMode };
