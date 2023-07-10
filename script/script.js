

document.addEventListener('DOMContentLoaded', function() {
    // Función para suavizar el desplazamiento al hacer clic en los enlaces del menú
    const smoothScroll = function(target) {
      const targetSection = document.querySelector(target);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    };
  
    // Agregar evento de clic a los enlaces del menú
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
      });
    });
  
    // Agregar evento de clic al botón "Descargar CV"
    const downloadBtn = document.getElementById('descargar-cv');
    downloadBtn.addEventListener('click', function() {
      // Lógica para descargar el CV
    });
  });
  