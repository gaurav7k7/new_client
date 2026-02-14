const intro = document.getElementById("intro");
const question = document.getElementById("question");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");

let currentSlide = 0;

const songs = [
  "music/love1.mp3",
  "music/love2.mp3",
  "music/spicy.mp3",
  "music/love1.mp3",
];

/* Name Animation */
const nameText = "My Beautiful Princess 💖";
let i = 0;
function typeName() {
  if (i < nameText.length) {
    document.getElementById("nameAnimation").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, 100);
  }
}
typeName();

/* Navigation */
startBtn.onclick = () => {
  intro.classList.add("hidden");
  question.classList.remove("hidden");
};

yesBtn.onclick = () => {
  question.classList.add("hidden");
  main.classList.remove("hidden");
  launchFireworks();
  playMusic();
};

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

/* Slider */
function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");
  music.src = songs[index];
  music.play();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function playMusic() {
  music.src = songs[currentSlide];
  music.play();
}

/* Fireworks Animation */
function launchFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      ctx.fillStyle = "hsl(" + Math.random() * 360 + ",100%,50%)";
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        5,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }, i * 100);
  }
}
