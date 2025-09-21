// Global animations and effects
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeGlobalAnimations();
    }, 500);
});

function initializeGlobalAnimations() {
    // Initialize section animations
    initializeSectionAnimations();
    
    // Initialize scroll effects
    initializeAdvancedScrollEffects();
    
    // Initialize particle effects
    initializeParticleEffects();
}

function initializeSectionAnimations() {
    // Animate sections as they come into view
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                animateSectionContent(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        section.style.opacity = '0.8';
        section.style.transform = 'translateY(30px)';
        sectionObserver.observe(section);
    });
}

function animateSectionContent(section) {
    section.style.transition = 'all 1s ease';
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
    
    // Animate child elements
    const elements = section.querySelectorAll('h2, h3, p, .step, .contact-link');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function initializeAdvancedScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for floating strips
        const floatingStrips = document.querySelector('.floating-strips');
        if (floatingStrips) {
            floatingStrips.style.transform = `translate(-50%, -50%) translateY(${rate * 0.3}px)`;
        }
        
        // Update wave positions
        const waves = document.querySelectorAll('.wave');
        waves.forEach((wave, index) => {
            const speed = (index + 1) * 0.1;
            wave.style.transform = `translateX(-50%) translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

function initializeParticleEffects() {
    // Create floating particles
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const colors = ['#ff6b9d', '#c2185b', '#ff8e53', '#ffb74d'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float-particle ${Math.random() * 10 + 10}s infinite linear;
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (Math.random() * 10 + 10) * 1000);
}

// Add particle animation CSS
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
        }
    }
    
    .section-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(particleStyles);