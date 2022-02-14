export default function network(classDiv) {
  //   console.log(navigator.onLine);
  const $div = document.querySelector(classDiv);

  window.addEventListener(
    "offline",
    evt => {
      $div.style.display = "block";
      $div.classList.add("is-offline");
      $div.innerHTML = "offline!";
      hideElement();
    },
    false
  );
  window.addEventListener(
    "online",
    evt => {
      $div.style.display = "block";
      $div.classList.add("is-online");
      $div.innerHTML = "online!";
      hideElement();
    },
    false
  );

  function hideElement() {
    setTimeout(() => {
      $div.style.display = "none";
      $div.classList.remove("is-online");
      $div.classList.remove("is-offline");
      $div.innerHTML = null;
    }, 2500);
  }
}
