document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const addAnimations = () => {
        // Hero section animations
        document.querySelectorAll('.hero-content').forEach(el => {
            el.setAttribute('data-aos', 'fade-right');
            el.setAttribute('data-aos-duration', '1000');
        });

        document.querySelectorAll('.hero-features').forEach(el => {
            el.setAttribute('data-aos', 'fade-up');
            el.setAttribute('data-aos-delay', '200');
        });

        document.querySelectorAll('.hero-image-container').forEach(el => {
            el.setAttribute('data-aos', 'fade-left');
            el.setAttribute('data-aos-duration', '1000');
        });

        // About section animations
        document.querySelectorAll('.founder-title-section').forEach(el => {
            el.setAttribute('data-aos', 'fade-left');
            el.setAttribute('data-aos-duration', '1000');
        });

        // Add fade-up animation to all sections
        document.querySelectorAll('section').forEach(el => {
            if (!el.hasAttribute('data-aos')) {
                el.setAttribute('data-aos', 'fade-up');
                el.setAttribute('data-aos-duration', '800');
            }
        });

        // Add fade-up animation to all headings that don't have animations
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
            if (!el.hasAttribute('data-aos') && !el.closest('[data-aos]')) {
                el.setAttribute('data-aos', 'fade-up');
                el.setAttribute('data-aos-duration', '800');
            }
        });

        // Add fade-up animation to all paragraphs that don't have animations
        document.querySelectorAll('p').forEach(el => {
            if (!el.hasAttribute('data-aos') && !el.closest('[data-aos]')) {
                el.setAttribute('data-aos', 'fade-up');
                el.setAttribute('data-aos-duration', '800');
                el.setAttribute('data-aos-delay', '100');
            }
        });
    };

    // Initialize AOS
    addAnimations();
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
    });
});
