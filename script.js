// Select mobile menu toggle elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toggleIcon = menuToggle.querySelector("i");

// Toggle navigation visibility and bars/cross icon
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Check state and replace Font Awesome classes
    if (navLinks.classList.contains("active")) {
        toggleIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        toggleIcon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close mobile menu when nav links are clicked
const allLinks = document.querySelectorAll(".nav-list a:not(.dropdown-toggle), .dropdown-menu a");
allLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        toggleIcon.className = "fa-solid fa-bars";
    });
});
