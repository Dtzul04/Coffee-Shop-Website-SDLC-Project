document.addEventListener("DOMContentLoaded", () => {
  console.log("Coffee Shop Website loaded");

  document.querySelectorAll(".menu-card h4").forEach((heading) => {
    heading.addEventListener("click", () => {
      const items = heading.nextElementSibling;
      if (items && items.classList.contains("items")) {
        items.classList.toggle("is-visible");
      }
    });
  });
});
