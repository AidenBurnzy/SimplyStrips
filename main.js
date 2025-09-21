// Main JavaScript file - loads all sections
document.addEventListener('DOMContentLoaded', function() {
    // Load all HTML sections
    loadSection('navigation-container', 'navigation.html');
    loadSection('hero-container', 'hero.html');
    loadSection('products-container', 'products.html');
    loadSection('how-it-works-container', 'how-it-works.html');
    loadSection('contact-container', 'contact.html');
    
    // Initialize animations after content loads
    setTimeout(() => {
        initializeAnimations();
    }, 100);
});

// Function to load HTML sections
async function loadSection(containerId, filename) {
    try {
        const response = await fetch(filename);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        // If products section loaded, initialize popups
        if (containerId === 'products-container' && typeof window.initializeProductPopups === 'function') {
            window.initializeProductPopups();
        }
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
    }
}

// Initialize all animations
function initializeAnimations() {
    createColorWaves();
    animateStrips();
    initializeParallax();
    initializeProductCardEffects();
}

// Create color waves background
function createColorWaves() {
    const waves = document.querySelector('.color-waves');
    if (waves) {
        for (let i = 0; i < 5; i++) {
            const wave = document.createElement('div');
            wave.className = `wave wave-${i + 1}`;
            waves.appendChild(wave);
        }
    }
}

// Animate floating strips
function animateStrips() {
    const strips = document.querySelectorAll('.floating-strips .strip');
    strips.forEach((strip, index) => {
        strip.style.animationDelay = `${index * 0.5}s`;
    });
}

// Parallax effect for hero
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Product card hover effects
function initializeProductCardEffects() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!document.body.classList.contains('popup-open')) {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}