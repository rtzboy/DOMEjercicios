const d = document;
let sun = "☀️";
let moon = "🌙";
const darkMode = (btnDark, spanBtn) => {
  let theme = localStorage.getItem("data-theme");
  //
  let $moonContent = d.querySelector(spanBtn);

  const enableDarkMode = () => {
    d.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  };
  const enableLightMode = () => {
    d.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  };

  if (theme === "dark") {
    enableDarkMode();
    $moonContent.textContent = sun;
  }

  d.addEventListener("click", evt => {
    if (evt.target.matches(btnDark) || evt.target.matches(`${btnDark} *`)) {
      // // change icon buttons
      let $moon = d.querySelector(spanBtn).textContent;
      let $moonContent = d.querySelector(spanBtn);
      // const changeIconButton = $moon === moon ? ($moonContent.textContent = sun) : ($moonContent.textContent = moon);
      let theme = localStorage.getItem("data-theme");

      if (theme === "dark") {
        enableLightMode();
        // const changeIconButton = $moon === moon ? ($moonContent.textContent = sun) : ($moonContent.textContent = moon);
        $moonContent.textContent = moon;
      } else {
        enableDarkMode();
        // const changeIconButton = $moon === moon ? ($moonContent.textContent = sun) : ($moonContent.textContent = moon);
        $moonContent.textContent = sun;
      }
    }
  });
};

export { darkMode };
