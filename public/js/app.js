const navbar = document.querySelector('.nav');
const toggleButton = document.querySelector('.toggle');
const closeBtn = document.querySelector('#close');

toggleButton.addEventListener('click', showNavigation);

function showNavigation() {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none';
    }
}