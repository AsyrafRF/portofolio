/* ======================================================
   AUDIO.JS — BACKGROUND CYBERPUNK AMBIENCE
   ====================================================== */

const bgm = new Audio("assets/audio/bgm.mp3");
bgm.loop = true;
bgm.volume = 0.35;

function startAudio() {
  bgm.play().catch(() => { });
}

document.addEventListener("click", startAudio, { once: true });
document.addEventListener("keydown", startAudio, { once: true });

/* Secret Mode Audio Boost */
document.addEventListener("secretMode", () => {
  bgm.volume = 0.55;
});

