document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close the menu if a link is clicked (optional, but good for UX)
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Existing carousel JS (if you had any, otherwise this block remains empty or can be removed)
    // For this setup, the carousel is purely CSS animated, so this part is not strictly needed for carousel functionality.
    // However, if you had more complex JS for the carousel, it would go here.
});
