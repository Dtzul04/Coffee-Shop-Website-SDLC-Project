document.addEventListener("DOMContentLoaded", () => {
  console.log("Coffee Shop Website loaded");
});

// when user clicks on a menu category, show the menu items for that
$(document).ready (function() {
  $(".items").hide();

  $(".menu-card h4").on("click", function () {
    
    $(this).siblings(".items").toggle();
  });
});






