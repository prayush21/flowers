const backgroundAudio = new Audio("kesariya.mp3");

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    // backgroundAudio.play();
    clearTimeout(c);
  }, 1000);
};

backgroundAudio.play(); // Start playback (optional)
backgroundAudio.loop = true; // Loop the audio (optional)

backgroundAudio.addEventListener("error", () => {
  console.error("Error loading background audio");
});
