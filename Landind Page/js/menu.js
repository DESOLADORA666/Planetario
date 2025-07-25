const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const links = document.querySelectorAll('.ul__links .links');

links.forEach(link => {
    link.addEventListener('click', () =>{
        navLinks.classList.remove('show');
    });
});

let touchStartX = 0;
let touchEndX = 0;

navLinks.addEventListener('touchstart', (e) =>{
    touchStartX = e.touches[0].clientX;
});

navLinks.addEventListener('touchend', (e) =>{
    touchEndX = e.changedTouches[0].clientX;
    handleMenuSwipe();
});

function handleMenuSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold){
        navLinks.classList.revome('show');
    }
}