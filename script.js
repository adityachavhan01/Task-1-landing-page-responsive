window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#1c173c'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = '#333';
    }
});



