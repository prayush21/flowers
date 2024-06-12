const backgroundAudio = new Audio("raataan.mp3");
let progressBarFill;
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const progressBar = document.getElementById("progressBar");
    progressBarFill = document.createElement("div");
    progressBarFill.id = "progressBarFill";
    progressBar.appendChild(progressBarFill);
    clearTimeout(c);
  }, 1000);
};

function togglePlayPause() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
  } else {
    backgroundAudio.pause();
  }
}

// Event listener for touchstart to toggle play/pause
window.addEventListener("touchstart", togglePlayPause);
window.addEventListener("click", togglePlayPause);

backgroundAudio.loop = true; // Loop the audio (optional)

backgroundAudio.addEventListener("loadedmetadata", () => {
  const duration = backgroundAudio.duration;
  progressBarFill.style.width = "0%";
});

backgroundAudio.addEventListener("progress", () => {
  const buffered = backgroundAudio.buffered;
  if (buffered.length > 0) {
    const bufferedEnd = buffered.end(buffered.length - 1);
    const duration = backgroundAudio.duration;
    const progress = (bufferedEnd / duration) * 100;
    progressBarFill.style.width = progress + "%";
  }
});

backgroundAudio.addEventListener("error", () => {
  console.error("Error loading background audio");
});
