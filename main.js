document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden"); // Toggle the 'hidden' class
  });
});
