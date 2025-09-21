// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation after content loads
    setTimeout(initializeNavigation, 200);
});

function initializeNavigation() {
    // Navigation link smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.floating-nav');
        if (nav) {
            const scrolled = window.pageYOffset;
            if (scrolled > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.2)';
                nav.style.backdropFilter = 'blur(30px)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.1)';
                nav.style.backdropFilter = 'blur(20px)';
            }
        }
    });
}