(function menuSlide() {
  const burger = document.querySelector('.burger');
  const topMenu = document.querySelector('.top-menu');
  burger.addEventListener('click', () => {
    topMenu.classList.toggle('toggled');
  });
})();
