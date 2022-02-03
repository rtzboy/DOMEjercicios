const d = document;

const clock = (btnStartClock, btnStopClock) => {
  let idInterval;
  function startReloj() {
    if (!idInterval) {
      d.querySelector(".clock").classList.toggle("clock-active");
      idInterval = setInterval(changeTime, 500);
    }
  }

  function changeTime() {
    const getDat = new Date();
    d.querySelector(".clock").innerHTML = getDat.toLocaleTimeString();
  }

  function stopClock() {
    clearInterval(idInterval);
    idInterval = null;
    d.querySelector(".clock").classList.remove("clock-active");
    d.querySelector(".clock").innerHTML = null;
  }

  d.addEventListener("click", evt => {
    if (evt.target.matches(btnStartClock)) {
      startReloj();
      evt.target.disabled = true;
      // console.log(evt.target);
    }
    if (evt.target.matches(btnStopClock)) {
      stopClock();
      d.querySelector(btnStartClock).disabled = false;
    }
  });
};

// src="assets/audio/cutSounf.mp3"
const alarm = (btnStartAlarm, btnEndAlarm) => {
  let interTime;
  const $audio = d.createElement("audio");
  $audio.src = "assets/audio/cutSounf.mp3";

  function startAlarm() {
    interTime = setTimeout(() => {
      $audio.play();
      $audio.loop = true;
    }, 1000);
  }

  function endAlarm() {
    clearTimeout(interTime);
    $audio.pause();
    $audio.currentTime = 0;
  }

  d.addEventListener("click", evt => {
    if (evt.target.matches(btnStartAlarm)) {
      startAlarm();
      evt.target.disabled = true;
    }
    if (evt.target.matches(btnEndAlarm)) {
      endAlarm();
      d.querySelector(btnStartAlarm).disabled = false;
    }
  });
};

export { clock, alarm };
