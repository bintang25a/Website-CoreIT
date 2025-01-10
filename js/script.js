window.addEventListener('scroll', function() {
    const navbar = this.document.querySelector('nav');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "5px 5px 5px var(--primary)";
        navbar.style.transition = "box-shadow 0.5s ease"
    }
    else {
        navbar.style.boxShadow = "none";
    }
});