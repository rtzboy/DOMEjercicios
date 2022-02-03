const d = document;
let idIntervalRight;
let idIntervalUp;
let idIntervalDown;
let idIntervalLeft;
var speedValue;
var countX = 0;
var countY = 0;

const moveBall = (idCircle, idBoard, eventBoard) => {
  const $board = d.querySelector(idBoard);
  const widpx = $board.clientWidth;
  const widpy = $board.clientHeight;
  const $circ = d.querySelector(idCircle);
  // getBoundingClientRect()  get ´top left right left botton

  function addX() {
    countX += 10;
  }
  function lessX() {
    countX -= 10;
  }
  function addY() {
    countY += 10;
  }
  function lessY() {
    countY -= 10;
  }

  const keyName = eventBoard.key;

  if (keyName === "ArrowRight") {
    changeStates(eventBoard.keyCode, true);
    getValue();
    activadoraRight();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowLeft") {
    changeStates(eventBoard.keyCode, true);
    getValue();
    activadoraLeft();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowDown") {
    changeStates(eventBoard.keyCode, true);
    getValue();
    activadoraDown();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowUp") {
    changeStates(eventBoard.keyCode, true);
    getValue();
    activadoraUp();
    eventBoard.preventDefault();
  }

  function activadoraRight() {
    if (!idIntervalRight) {
      idIntervalRight = setInterval(() => {
        let resta = widpx - 50;
        if (countX < resta) {
          addX();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, speedValue);
    }
  }

  function activadoraUp() {
    if (!idIntervalUp) {
      idIntervalUp = setInterval(() => {
        if (countY > 0) {
          lessY();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, speedValue);
    }
  }

  function activadoraLeft() {
    if (!idIntervalLeft) {
      idIntervalLeft = setInterval(() => {
        if (countX > 0) {
          lessX();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, speedValue);
    }
  }

  function activadoraDown() {
    if (!idIntervalDown) {
      idIntervalDown = setInterval(() => {
        let rest = widpy - 50;
        if (countY < rest) {
          addY();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, speedValue);
    }
  }
};
// -- velocidad ball

function getValue() {
  let valueSpeed = d.getElementById("speed").value;
  switch (Number(valueSpeed)) {
    case 10:
      speedValue = 100;
      break;
    case 40:
      speedValue = 70;
      break;
    case 70:
      speedValue = 40;
      break;
    case 100:
      speedValue = 10;
      break;
    default:
      break;
  }
}
//

const shortCts = eventKeyboard => {
  const keyName = eventKeyboard.key;
  if (keyName === "Alt") {
    return;
  }
  if (eventKeyboard.altKey && keyName === "a") {
    alert("hola como estas has presionado la combinacion Alt + a");
  }
  if (eventKeyboard.altKey && keyName === "p") {
    prompt("hola como estas has presionado la combinacion Alt + p");
  }
  if (eventKeyboard.altKey && keyName === "c") {
    confirm("hola como estas has presionado la combinacion Alt + c");
  }
};

const resetButton = (clssBtn, idCicle) => {
  const $circle = d.querySelector(idCicle);

  d.addEventListener("click", evt => {
    if (evt.target.matches(clssBtn)) {
      $circle.style.transform = `translate(0, 0)`;
      d.getElementById("speed").value = 10;
      countX = 0;
      countY = 0;
    }
  });
};

// estadoMoviemiento

const state = {
  up: false, //38
  right: false, //39
  down: false, //40
  left: false, //37
};

function changeStates(code, value) {
  if (code == 39) state.right = value;
  else if (code == 40) state.down = value;
  else if (code == 37) state.left = value;
  else if (code == 38) state.up = value;
}

const testUp = evnto => {
  if (evnto.keyCode === 39) {
    changeStates(evnto.keyCode, false);
    clearInterval(idIntervalRight);
    idIntervalRight = null;
  }
  if (evnto.keyCode === 38) {
    changeStates(evnto.keyCode, false);
    clearInterval(idIntervalUp);
    idIntervalUp = null;
  }
  if (evnto.keyCode === 37) {
    changeStates(evnto.keyCode, false);
    clearInterval(idIntervalLeft);
    idIntervalLeft = null;
  }
  if (evnto.keyCode === 40) {
    changeStates(evnto.keyCode, false);
    clearInterval(idIntervalDown);
    idIntervalDown = null;
  }
};

export { moveBall, shortCts, resetButton, testUp, getValue };
