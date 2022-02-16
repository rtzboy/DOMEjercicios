const d = document;
export default function busqueda() {
  let figcValue;
  d.addEventListener("keyup", evt => {
    if (evt.target.matches("#search_input")) {
      const input = d.querySelector("#search_input");
      const filter = input.value.toUpperCase();
      const $figcap = d.getElementsByTagName("figcaption");
      const $figure = d.getElementsByTagName("figure");

      for (let i = 0; i < $figcap.length; i++) {
        figcValue = $figcap[i].textContent || $figcap[i].innerHTML;
        //    search
        if (figcValue.toUpperCase().indexOf(filter) > -1) {
          $figure[i].style.visibility = "visible";
          $figure[i].style.opacity = "1";
          $figure[i].style.order = 0;
          // $figure[i].style.display = "";
        } else {
          // $figure[i].style.display = "none";
          $figure[i].style.visibility = "hidden";
          $figure[i].style.opacity = "0";
          $figure[i].style.order = 1;
        }
      }
    }
  });
}
