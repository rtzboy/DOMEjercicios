const d = document;
export default function busqueda() {
  var figcValue;
  d.addEventListener("keyup", evt => {
    if (evt.target.matches("#search_input")) {
      const input = d.querySelector("#search_input");
      const filter = input.value.toUpperCase();
      const $figcap = d.getElementsByTagName("figcaption");
      const $figure = d.getElementsByTagName("figure");
      console.log($figcap);
      console.log($figure);

      for (let i = 0; i < $figcap.length; i++) {
        figcValue = $figcap[i].textContent || $figcap[i].innerHTML;
        //    search
        if (figcValue.toUpperCase().indexOf(filter) > -1) {
          $figure[i].style.display = "";
        } else {
          $figure[i].style.display = "none";
        }
      }
    }
  });
}
