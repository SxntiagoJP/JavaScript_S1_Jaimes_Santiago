let deckId = '';
let playerCard = null;
let machineCard = null;

const playerImg = document.getElementById('player-card');
const machineImg = document.getElementById('machine-card');
const drawBtn = document.getElementById('draw-button');
const revealBtn = document.getElementById('reveal-button');
const resultText = document.getElementById('result');

async function getDeck() {
  const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await res.json();
  deckId = data.deck_id;
}

function getCardValue(value) {
  const map = {
    "ACE": 14,
    "KING": 13,
    "QUEEN": 12,
    "JACK": 11
  };
  return map[value] || parseInt(value);
}

async function drawCards() {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
  const data = await res.json();

  playerCard = data.cards[0];
  machineCard = data.cards[1];

  playerImg.src = "https://deckofcardsapi.com/static/img/back.png";
  machineImg.src = "https://deckofcardsapi.com/static/img/back.png";

  resultText.textContent = '';
  revealBtn.disabled = false;
}

function revealCards() {
  playerImg.src = playerCard.image;
  machineImg.src = machineCard.image;

  const playerVal = getCardValue(playerCard.value);
  const machineVal = getCardValue(machineCard.value);

  if (playerVal > machineVal) {
    resultText.textContent = "¡Ganaste!";
    resultText.style.color = "green";
  } else if (playerVal < machineVal) {
    resultText.textContent = "Perdiste :(";
    resultText.style.color = "red";
  } else {
    resultText.textContent = "¡Empate!";
    resultText.style.color = "#f39c12";
  }

  revealBtn.disabled = true;
}

drawBtn.addEventListener('click', drawCards);
revealBtn.addEventListener('click', revealCards);

// Inicializa el mazo al cargar
getDeck();