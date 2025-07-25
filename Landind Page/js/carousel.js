document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.about__planets');
  const btnLeft = document.querySelector('.left__arrow');
  const btnRight = document.querySelector('.right__arrow');
  const planetSection = document.querySelector('.planets');

  let current = 0;

  const planetColors = {
    earth: 'radial-gradient(circle at center, #2196f3 0%, #0d47a1 100%)',
    mars: 'radial-gradient(circle at center, #ff5722 0%, #b71c1c 100%)',
    jupiter: 'radial-gradient(circle at center, #a1887f 0%, #4e342e 100%)',
    saturn: 'radial-gradient(circle at center, #fff176 0%, #fbc02d 100%)',
    uranus: 'radial-gradient(circle at center, #4dd0e1 0%, #00796b 100%)',
    neptune: 'radial-gradient(circle at center, #536dfe 0%, #1a237e 100%)',
    venus: 'radial-gradient(circle at center, #ffb6c1 0%, #ad1457 100%)',
    mercury: 'radial-gradient(circle at center, #bdbdbd 0%, #424242 100%)'
  };


  function updateCarousel() {
    const total = slides.length;

    slides.forEach((slide, i) => {
      const offset = (i - current + total) % total;

      let scale, rotation, translateZ, opacity, zIndex;

      if (offset === 0) {
        scale = 1;
        rotation = 0;
        translateZ = 0;
        opacity = 1;
        zIndex = 3;
      } else if (offset === 1) {
        scale = 0.85;
        rotation = 40;
        translateZ = -130;
        opacity = 0.6;
        zIndex = 2;
      } else if (offset === total - 1) {
        scale = 0.85;
        rotation = -45;
        translateZ = -130;
        opacity = 0.6;
        zIndex = 2;
      } else {
        scale = 0.75;
        rotation = offset < total / 2 ? -60 : 60;
        translateZ = -180;
        opacity = 0.35;
        zIndex = 1;
      }

      slide.classList.toggle('active', offset === 0);
      slide.setAttribute('aria-hidden', offset !== 0 ? 'true' : 'false');
      slide.style.position = 'absolute';
      slide.style.top = '0';
      slide.style.left = '50%';
      slide.style.transform = `translateX(-50%) scale(${scale}) rotateY(${rotation}deg) translateZ(${translateZ}px)`;
      slide.style.opacity = opacity;
      slide.style.zIndex = zIndex;
    });

    updateBackground(); // ⚡ cambia el fondo dinámicamente
  }

  function updateBackground() {
    const planetId = slides[current].id;
    const bgColor = planetColors[planetId] || '#000';

    // Si usás gradiente:
    //planetSection.style.background = `radial-gradient(circle at center, ${bgColor} 0%, #000 100%)`;

    // Si preferís color plano:
    planetSection.style.background = bgColor;
  }

  btnRight.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateCarousel();
  });

  btnLeft.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  updateCarousel(); // Inicializa el carrusel con fondo y posición
});
