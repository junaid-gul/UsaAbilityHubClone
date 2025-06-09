document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll(".nav-links a");

  // Toggle Menu
  navToggle.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  // Close menu on overlay click
  overlay.addEventListener("click", function () {
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Close menu when any link is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
      overlay.classList.remove("show");
    });
  });
});


