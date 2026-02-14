// ENTER WEBSITE

function enterWebsite() {
  document.getElementById("startScreen").style.display = "none";

  document.getElementById("mainWebsite").style.display = "block";
}

// NO BUTTON ESCAPE

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";

  noBtn.style.top = Math.random() * 80 + "%";

  noBtn.style.left = Math.random() * 80 + "%";
});

// QUOTES

const quotes = [
  "Kitty, you are my favorite notification ❤️",

  "Ananya, you make my world beautiful 💕",

  "I fall in love with you every single day",

  "Your smile is my biggest weakness",

  "Spicy truth? I want you forever 😏🔥",

  "You are my peace, my love, my everything",
];

const music = [
  "music/love1.mp3",

  "music/love2.mp3",

  "music/love1.mp3",

  "music/love2.mp3",

  "music/spicy.mp3",

  "music/love1.mp3",
];

let index = 0;

const quoteText = document.getElementById("quoteText");

const player = document.getElementById("musicPlayer");

function showQuote() {
  quoteText.innerText = quotes[index];

  player.src = music[index];

  player.play();
}

function nextQuote() {
  index = (index + 1) % quotes.length;

  showQuote();
}

function prevQuote() {
  index = (index - 1 + quotes.length) % quotes.length;

  showQuote();
}

showQuote();

// VIDEO PLAY

function playVideo(video) {
  video.play();
}
