// Custom JS can be added here
// Example: Smooth scroll for anchor links

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
