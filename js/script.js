//navbar shadow
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

//manggil navbar dan footer komponen
fetch(`/views/components/navbar.html`)
    .then(response => response.text())
    .then(data => {
        document.querySelector('nav').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

fetch('/views/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));