const messages = [
  "Kamu yakin gamau?",
  "Serius nihh?",
  "Beneran kah?",
  "Ayoo lah sayangku",
  "Coba pikirin lagi deh ^_^",
  "Kalo kamu gamau, aku bakalan sedih :(",
  "Seriusan bakalan sedih sih..",
  "Demi apapun pasti sedih banget..",
  "Yaudah deh aku ga maksa..",
  "Becanda wleee, HARUS BILANG YES❤️"
];

let messageIndex = 0;

const yesButton = document.getElementById("yesButton")
const noButton = document.getElementById("noButton")

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

const container = document.getElementById("container")
const jintuk = document.getElementById("yesMenu")
function handleYesClick() {
  container.style.display = "none"
  jintuk.style.display = "block"
}

yesButton.addEventListener("click", handleYesClick)
noButton.addEventListener("click", handleNoClick)
