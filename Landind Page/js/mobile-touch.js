const carrusel = document.querySelector('.planets');
let startX = 0;
let endX = 0;

carrusel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carrusel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = endX - startX;
  const threshold = 50; // mínimo para que cuente como swipe

  if (swipeDistance > threshold) {
    // Swipe a la derecha (ver slide anterior)
    document.querySelector('.left__arrow')?.click();
  } else if (swipeDistance < -threshold) {
    // Swipe a la izquierda (ver siguiente slide)
    document.querySelector('.right__arrow')?.click();
  }
}
