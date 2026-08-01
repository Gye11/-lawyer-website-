document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");

  // 4 saniye sonra intro kaybolsun
  setTimeout(() => {
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      document.body.style.overflow = "auto";
    }, 1000);
  }, 4000);
});
