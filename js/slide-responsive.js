const d = document;

export default function slideResponsive(classConta) {
  const $divCont = d.querySelectorAll(classConta);
  let slideIndex = 1;

  showSlide(slideIndex);

  function plusSlides(n) {
    showSlide((slideIndex += n));
  }

  //   function currentSlide(n) {
  //     showSlide((slideIndex = n));
  //   }

  function showSlide(n) {
    if (n > $divCont.length) slideIndex = 1;
    if (n < 1) slideIndex = $divCont.length;
    for (let i = 0; i < $divCont.length; i++) {
      // $divCont[i].style.display = "none";
      $divCont[i].classList.add("fade");
      $divCont[i].classList.remove("active_img_txt");
    }

    // $divCont[slideIndex - 1].style.display = "block";
    $divCont[slideIndex - 1].classList.add("active_img_txt");
    $divCont[slideIndex - 1].classList.remove("fade");
  }

  d.addEventListener("click", evt => {
    if (evt.target.matches(".arrowRight1")) {
      plusSlides(-1);
    }

    if (evt.target.matches(".arrowRight2")) {
      plusSlides(1);
    }
  });

  setInterval(() => {
    plusSlides(1);
  }, 4000);
}
