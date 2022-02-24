const d = document;
const validateReg = new RegExp(/^[a-z ñA-Z]+$/);
const validateRegEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
const validateRegAsunto = new RegExp(/^[a-z ñ0-9]+$/i);
const validateRegMessage = new RegExp(/^.{1,255}$/);

export default function regForm() {
  d.addEventListener("keyup", evt => {
    let $nombre = d.getElementById("nombre").value;
    let $email = d.getElementById("email").value;
    let $asunto = d.getElementById("asunto").value;
    let $message = d.getElementById("message").value;
    let $div = d.querySelectorAll(".field input");
    let $divErr = d.querySelectorAll(".error_type");
    let $textArea = d.querySelector("#message");

    if (evt.target.matches(".form_send_validate input")) {
      validateNombre($nombre, $divErr);
      validateEmail($email, $divErr);
      validateAsunto($asunto, $divErr);
    }
    if (evt.target.matches("#message")) {
      let $pattern = evt.target;
      let $patternTextArea = $pattern.pattern || $pattern.dataset.pattern;
      validateMessage($message, $divErr);
      // console.log($patternTextArea);
    }
  });

  function validateNombre(nom, divClass) {
    validateReg.test(nom) ? divClass[0].classList.remove("active_val") : divClass[0].classList.add("active_val");
    if (nom === "") divClass[0].classList.remove("active_val");
  }

  function validateEmail(mail, divClass) {
    validateRegEmail.test(mail) ? divClass[1].classList.remove("active_val") : divClass[1].classList.add("active_val");
    if (mail === "") divClass[1].classList.remove("active_val");
  }

  function validateAsunto(asunto, divClass) {
    validateRegAsunto.test(asunto) ? divClass[2].classList.remove("active_val") : divClass[2].classList.add("active_val");
    if (asunto === "") divClass[2].classList.remove("active_val");
  }

  function validateMessage(msg, divClass) {
    validateRegMessage.test(msg) ? divClass[3].classList.remove("active_val") : divClass[3].classList.add("active_val");
    if (msg === "") divClass[3].classList.remove("active_val");
  }

  d.addEventListener("submit", evt => {
    let $nombre = d.getElementById("nombre").value;
    let $email = d.getElementById("email").value;
    let $asunto = d.getElementById("asunto").value;
    let $message = d.getElementById("message").value;
    //
    let $loader = d.querySelector(".loading");
    let $response = d.querySelector(".response");
    let $form = d.querySelector(".form_send_validate");
    // s
    if (evt.target.matches(".form_send_validate")) {
      // evt.preventDefault();
      alert("enviando informacion");
      $loader.classList.remove("none_loading");
      setTimeout(() => {
        $loader.classList.add("none_loading");
        $response.classList.remove("none_loading");
        $form.reset();
        setTimeout(() => {
          $response.classList.add("none_loading");
        }, 3000);
      }, 4000);
    }
  });
}
