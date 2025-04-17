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

        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop - 20, // scroll just a little past it
            behavior: "smooth",
          });
        }, 100); // slight delay for display update
      } else {
        section.style.maxHeight = "0";
        setTimeout(() => {
          section.style.display = "none";
        }, 300);
      }
    });
  }
});