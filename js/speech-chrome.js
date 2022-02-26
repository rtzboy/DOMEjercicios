const d = document;
var synth = speechSynthesis;

export default function speechOut() {
  const $select_voices = d.getElementById("select_voices");
  const $input_text = d.getElementById("txt_voice");
  let voices = [];

  const getVoicesList = () => {
    voices = speechSynthesis.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(),
        bname = b.name.toUpperCase();
      if (aname < bname) return -1;
      else if (aname == bname) return 0;
      else return +1;
    });

    let selectedIndex = $select_voices.selectedIndex < 0 ? 0 : $select_voices.selectedIndex;
    $select_voices.innerHTML = "";

    for (var i = 0; i < voices.length; i++) {
      let option = d.createElement("option");
      option.textContent = voices[i].name + " (" + voices[i].lang + ")";

      if (voices[i].default) {
        option.textContent += " -- POR DEFECTO";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      $select_voices.appendChild(option);
    }
    $select_voices.selectedIndex = selectedIndex;
    // - - - - - - - - - - - - - - -- - -- - -- - -- - -- - -
    d.addEventListener("submit", evt => {
      evt.preventDefault();
      if (evt.target.matches(".speech_form")) {
        speak();
        $input_text.blur();
      }
    });
  };

  getVoicesList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoicesList;
  }

  speechSynthesis.addEventListener("voiceschanged", evt => {
    console.log(evt);
  });

  function speak() {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }
    if ($input_text.value !== "") {
      let speechText = new SpeechSynthesisUtterance($input_text.value);

      speechText.onend = function (evt) {
        console.log("SpeechSynthesisUtterance.onend");
      };
      speechText.onerror = function (evt) {
        console.error("SpeechSynthesisUtterance.onerror");
      };
      let selectedOption = $select_voices.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          speechText.voice = voices[i];
          break;
        }
      }
      speechText.rate = 1.1;
      synth.speak(speechText);
    }
  }
  $select_voices.onchange = function () {
    speak();
  };
}
