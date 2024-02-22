// Menú responsive
// Espera a que se cargue el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el icono del menú y el menú en sí
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  // Agrega un evento de clic al icono del menú
  menuIcon.addEventListener('click', function() {
  // Alterna la clase 'active' del menú para mostrarlo o ocultarlo
    menu.classList.toggle('active');
  });
});


// Funciones para el lightbox
function openLightbox(image) {
  document.getElementById('lightboxImg').src = image;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
