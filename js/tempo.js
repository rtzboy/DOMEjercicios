const d = document;
const $h3 = d.createElement("h3");
let idInterval;

// const date =  new Date("2022-25-12")

const tempo = tempoClass => {
  $h3.style.fontSize = "1.5rem";
  $h3.style.display = "inline-block";
  $h3.style.padding = ".5rem .7rem";
  //
  const $art = d.querySelector(tempoClass);
  $art.appendChild($h3);
  coutingDown();
};

function coutingDown() {
  idInterval = setInterval(() => {
    setTime();
  }, 1000);
}

function setTime() {
  const date = new Date(2022, 11, 25).getTime();
  const dateToday = new Date().getTime();
  const tmp = Number(date) - Number(dateToday);

  let days = Math.floor(tmp / (24 * 60 * 60 * 1000)),
    daysms = tmp % (24 * 60 * 60 * 1000),
    hours = Math.floor(daysms / (60 * 60 * 1000)),
    hoursms = tmp % (60 * 60 * 1000),
    minutes = Math.floor(hoursms / (60 * 1000)),
    minutesms = tmp % (60 * 1000),
    sec = Math.floor(minutesms / 1000);

  $h3.innerHTML = `faltan: ${days} dias - ${hours} horas - ${minutes} minutos - ${sec} segundos`;
  stopCounting(days, hours, minutes, sec);
}

function stopCounting(value, valueTwo, valueThree, valueFour) {
  if (value === 0 && valueTwo === 0 && valueThree === 0 && valueFour === 0) {
    clearInterval(idInterval);
    idInterval = null;
    // alerta
    $h3.remove();
    const $alert = d.createElement("h1"),
      $article = d.querySelector(".temporizador");
    $article.appendChild($alert);
    $alert.textContent = "FELICITACIONES ES NAVIDAD";
    $alert.style.color = "rgb(251, 214, 23)";
    $alert.style.textShadow = "1px 1px 2px red, 0 0 1em yellow, 0 0 0.2em black";
  }
}

export default tempo;
