// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -60; // Adjust this value for precise scrolling position
  
      window.scroll({
        top: targetElement.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
  });
  