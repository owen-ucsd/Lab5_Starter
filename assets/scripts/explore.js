// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
let voices = [];

function init() {
  const face = document.querySelector("img");
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");

  synth.addEventListener("voiceschanged", () => {
    voices = synth.getVoices();

    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = voice.name + " (" + voice.lang + ")";

      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  });

  button.addEventListener("click", () => {
    if (voiceSelect.value != "select") {
      let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
      
      utterance.voice = voices.find(voice => {
        return voice.name === voiceSelect.selectedOptions[0].getAttribute("data-name");
      });

      utterance.addEventListener("start", () => {
        face.src = "assets/images/smiling-open.png";
      });

      utterance.addEventListener("end", () => {
        face.src = "assets/images/smiling.png";
      });

      synth.speak(utterance);
    }
  });
}