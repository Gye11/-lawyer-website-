setTimeout(() => {
  const intro = document.getElementById("intro");

  intro.style.transition = "opacity 1s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "auto";
  }, 1000);
}, 3000);
