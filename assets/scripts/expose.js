// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector("section > img");
  const audio = document.querySelector("audio");
  const horn = document.getElementById("horn-select");
  const volume = document.getElementById("volume");
  const icon = document.querySelector("div > img");
  const play = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  audio.volume = volume.value / 100;

  horn.addEventListener('change', () => {
    audio.src = "assets/audio/" + horn.value + ".mp3";
    image.src = "assets/images/" + horn.value + ".svg";
  });

  volume.addEventListener('input', () => {
    if (volume.value == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
    } else if (volume.value >= 1 && volume.value < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
    } else if (volume.value >= 33 && volume.value < 67) {
      icon.src = "assets/icons/volume-level-2.svg";
    } else if (volume.value >= 67) {
      icon.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = volume.value / 100;
  });

  play.addEventListener('click', () => {
    if (horn.value != "select") {
      audio.play();
    }

    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}