const d = document;

export default function sorteo(btn) {
  const arreglo = [];
  const $li = d.querySelectorAll(".list_giveaway_item");

  for (let i = 0; i < $li.length; i++) arreglo[i] = $li[i].textContent;

  d.addEventListener("click", evt => {
    const randomN = Math.floor(Math.random() * $li.length);
    if (evt.target.matches(btn)) {
      alert(`el ganador es: ${arreglo[randomN]}`);
    }
  });
}
