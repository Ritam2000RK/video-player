const video = document.querySelector(".video-container");
const btn = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    if (!btn.classList.contains("slide")) {
      btn.classList.add("slide");
      video.pause();
    } else {
      btn.classList.remove("slide");
      video.play();
    }
  });
});
