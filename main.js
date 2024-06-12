const backgroundAudio = new Audio("kesariya.mp3");

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.addEventListener("click", () => {
  backgroundAudio.play();
});

window.addEventListener("touchstart", () => {
  backgroundAudio.play();
});

// window.onload = function () {
//   backgroundAudio.play();
// };

// backgroundAudio.play(); // Start playback (optional)
backgroundAudio.loop = true; // Loop the audio (optional)

backgroundAudio.addEventListener("error", () => {
  console.error("Error loading background audio");
});
