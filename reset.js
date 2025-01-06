// Shared Script (reset.js)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Common functionality initialized!");

    // Highlight the active navigation link based on the current page
    const navLinks = document.querySelectorAll("header nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Handle the toggle menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (menuToggle && navMenu) { // Ensure the elements exist before adding event listeners
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active'); // Animate toggle button
            navMenu.classList.toggle('active');    // Show/hide the navigation menu
        });
    } else {
        console.error("Menu toggle or navigation menu not found in the document.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-box");

    navLinks.forEach((link) => {
        // Use Dark Gold as the default background color
        const boxColor = "#00002F"; // Dark Gold
        link.style.backgroundColor = boxColor;

        // Set hover effect color (darker shade of Dark Gold)
        const hoverColor = shadeColor(boxColor, -20);
        link.style.setProperty('--hover-color', hoverColor);
    });

    // Function to lighten/darken colors
    function shadeColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = ((num >> 8) & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return (
            "#" +
            (0x1000000 +
                (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
                (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
                (B < 255 ? (B < 1 ? 0 : B) : 255))
                .toString(16)
                .slice(1)
        );
    }
});
