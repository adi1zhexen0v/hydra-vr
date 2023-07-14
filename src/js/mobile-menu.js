'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('.nav-mobile');
  const menuButtons = document.querySelectorAll('.nav-mobile__btn');
  const menuOpenButton = menuButtons[0];
  const menuCloseButton = menuButtons[1];
  const menuLinks = menuContainer.querySelectorAll('a');

  const openMenu = () => {
    menuContainer.classList.remove('nav-mobile__hide');
  };

  const closeMenu = () => {
    menuContainer.classList.add('nav-mobile__hide');
  };

  menuOpenButton.addEventListener('click', openMenu);
  menuCloseButton.addEventListener('click', closeMenu);
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

});