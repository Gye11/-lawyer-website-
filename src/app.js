window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.add("show");
    }, 800);
  }, 3200);
});
