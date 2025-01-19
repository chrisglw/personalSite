function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


function toggleProjects() {
const extraProjects = document.getElementById("extra-projects");
const toggleButton = document.getElementById("toggle-projects");

if (extraProjects.style.display === "none") {
    extraProjects.style.display = "grid";
    toggleButton.innerText = "Show Less";
} else {
    extraProjects.style.display = "none";
    toggleButton.innerText = "Show All";
}
}
