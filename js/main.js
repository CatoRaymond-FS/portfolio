document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".tldr-button");
  const section = document.querySelector(".tldr-section");

  if (button && section) {
    section.style.display = "none"; // start hidden

    button.addEventListener("click", () => {
      if (section.style.display === "none") {
        section.style.display = "block";
        section.style.maxHeight = section.scrollHeight + "px";
        section.style.overflow = "hidden";

        button.textContent = "Okay I'll check it out"; // change text

        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop - 20,
            behavior: "smooth",
          });
        }, 100);
      } else {
        section.style.maxHeight = "0";
        button.textContent = "Just Give Me the TL;DR"; // reset text
        setTimeout(() => {
          section.style.display = "none";
        }, 300);
      }
    });
  }
});