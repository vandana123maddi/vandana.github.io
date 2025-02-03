// Theme Switching
const themeButtons = document.querySelectorAll(".footer-buttons button");
const themeStylesheet = document.getElementById("themeStylesheet");

themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const theme = button.getAttribute("data-theme");
        themeStylesheet.setAttribute("href", theme);
        themeButtons.forEach(btn => btn.classList.remove("active-theme"));
        button.classList.add("active-theme");
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.createElement("button");
menuToggle.innerText = "☰";
menuToggle.classList.add("menu-toggle");
document.querySelector("header").appendChild(menuToggle);

const navMenu = document.querySelector("header ul");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙";
darkModeToggle.classList.add("dark-mode-toggle");
document.querySelector("header").appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    darkModeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    
});
