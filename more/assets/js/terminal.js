const terminalStrings = [
  "Initializing system...",
  "Loading profile: ASYRAF.RF",
  "Role: Fullstack Engineer",
  "Status: ONLINE"
];

let lineIndex = 0;
let charIndex = 0;
// Targetkan span di dalam terminal agar cursor tetap di tempatnya
const output = document.getElementById("terminal-text"); 

function type() {
  if (lineIndex < terminalStrings.length) {
    if (charIndex < terminalStrings[lineIndex].length) {
      output.innerHTML += terminalStrings[lineIndex][charIndex];
      charIndex++;
      setTimeout(type, 40);
    } else {
      output.innerHTML += "<br>"; // Pindah baris
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 500); // Jeda antar baris agar lebih realistis
    }
  }
}

// Jalankan fungsi
type();
