const d = document;

export default function newURL(idForm) {
  const $idForm = d.getElementById(idForm);
  let test;

  // location.assign("http://www.facebook.com");

  // console.log(location.assign("http://www.facebook.com"));
  d.addEventListener("submit", evt => {
    if (evt.target === $idForm) {
      evt.preventDefault();

      if (test == null || test.closed) {
        test = window.open(
          $idForm.url.value,
          "tester",
          `innerWidth=${$idForm.width.value}, 
          innerHeight=${$idForm.height.value}`
        );
        test === false;
        console.log(test);
      } else {
        test.focus();
      }
    }
  });

  d.addEventListener("click", evt => {
    if (evt.target === $idForm.close) {
      if (test !== null) test.close();
    }
  });
}
