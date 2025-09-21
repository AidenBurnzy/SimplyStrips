// Hero section functionality
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced hero animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeHeroAnimations();
    }, 300);
});

function initializeHeroAnimations() {
    // Animate word strips on load
    const wordStrips = document.querySelectorAll('.word-strip');
    wordStrips.forEach((strip, index) => {
        strip.style.opacity = '0';
        strip.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            strip.style.transition = 'all 0.8s ease';
            strip.style.opacity = '1';
            strip.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            subtitle.style.transition = 'all 0.8s ease';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 800);
    }

    // Animate CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.style.opacity = '0';
        ctaButton.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            ctaButton.style.transition = 'all 0.8s ease';
            ctaButton.style.opacity = '1';
            ctaButton.style.transform = 'translateY(0)';
        }, 1200);
    }
}