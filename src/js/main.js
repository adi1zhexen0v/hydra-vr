import mobileMenu from "./modules/mobile-menu.js";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  mobileMenu({
    menuSelector: '.nav-mobile',
    buttonsSelector: '.nav-mobile__btn',
    menuHideSelector: 'nav-mobile__hide',
  });
}); 