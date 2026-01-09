/* ======================================================
   KONAMI.JS — SECRET ABOUT ME MODE
   ====================================================== */

const konamiCode = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a"
];

let konamiIndex = 0;

window.addEventListener("keydown", e => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateSecretMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateSecretMode() {
  document.body.classList.add("secret-mode");

  const secretSection = document.getElementById("secret");
  if (secretSection) {
    secretSection.classList.remove("hidden");
    secretSection.scrollIntoView({ behavior: "smooth" });
  }

  document.dispatchEvent(new Event("secretMode"));

  alert(`
    SECRET MODE UNLOCKED

    • Unique facts
    • Hidden hobbies
    • Favorite quote
    • Passion projects
    • Alternate mindset
  `);
}
