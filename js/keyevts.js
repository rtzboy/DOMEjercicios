const d = document;
let idIntervalRight;
let idIntervalUp;
let idIntervalDown;
let idIntervalLeft;
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
    activadoraRight();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowLeft") {
    changeStates(eventBoard.keyCode, true);
    activadoraLeft();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowDown") {
    changeStates(eventBoard.keyCode, true);
    activadoraDown();
    eventBoard.preventDefault();
  }
  if (keyName === "ArrowUp") {
    changeStates(eventBoard.keyCode, true);
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
      }, 60);
    }
  }

  function activadoraUp() {
    if (!idIntervalUp) {
      idIntervalUp = setInterval(() => {
        if (countY > 0) {
          lessY();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, 60);
    }
  }

  function activadoraLeft() {
    if (!idIntervalLeft) {
      idIntervalLeft = setInterval(() => {
        if (countX > 0) {
          lessX();
          $circ.style.transform = `translate(${countX}px, ${countY}px)`;
        }
      }, 60);
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
      }, 60);
    }
  }
};

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

export { moveBall, shortCts, resetButton, testUp };
