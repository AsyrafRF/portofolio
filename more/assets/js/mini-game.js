/* ======================================================
   MINI GAME — SYSTEM BREACH
   ====================================================== */

let position = 0;
let direction = 1;
let speed = 1.6;
let active = false;

const signal = document.querySelector(".signal");
const hackBtn = document.getElementById("hack-btn");
const statusText = document.getElementById("game-status");

function startGame() {
  active = true;
  statusText.textContent = "Signal moving...";
  loop();
}

function loop() {
  if (!active) return;

  position += speed * direction;

  if (position >= 90 || position <= 0) {
    direction *= -1;
  }

  signal.style.width = position + "%";
  requestAnimationFrame(loop);
}

hackBtn.addEventListener("click", () => {
  if (!active) {
    startGame();
    return;
  }

  active = false;

  if (position > 45 && position < 55) {
    statusText.textContent = "✔ ACCESS GRANTED — SYSTEM BREACHED";
    statusText.style.color = "#7CFFB2";
  } else {
    statusText.textContent = "✖ ACCESS DENIED — TRY AGAIN";
    statusText.style.color = "#ff7a9c";
  }
});

/* Auto enable when secret mode active */
document.addEventListener("secretMode", () => {
  const game = document.getElementById("mini-game");
  game.classList.remove("hidden");
});

