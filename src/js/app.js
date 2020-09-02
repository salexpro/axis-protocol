/* global $ */
import 'zepto/dist/zepto.min';
import gsap from 'gsap';

// import svg4everybody from 'svg4everybody';
// import './lib/foundation-explicit-pieces';

// svg4everybody();

const tl = gsap.timeline({ paused: true });
const $hamb = $('.header_hamb');

const toggleMenu = (state = false) => {
  if (state) {
    tl.play();
  } else {
    tl.reverse();
  }
  $hamb.toggleClass('active', state);
  $('.header').toggleClass('opened', state);
};

tl.to(
  '.header_hamb_line-top',
  {
    y: 8,
    duration: 0.2,
  },
  0
)
  .to('.header_hamb_line-bottom', { y: -8, duration: 0.2 }, 0)
  .to('.header_hamb', { rotate: 45, duration: 0.25 })
  .to(
    '.header_hamb_line-bottom',
    { transformOrigin: '14px 1.5px', rotate: 90, duration: 0.25 },
    '-=0.3'
  );

$hamb
  .mouseenter(() => {
    const tl = gsap.timeline();
    tl.to('.header_hamb_line-top', { width: 28, x: -6, duration: 0.25 }).to(
      '.header_hamb_line-bottom',
      { width: 28, x: -8, duration: 0.25 },
      0.1
    );
  })
  .mouseleave(() => {
    if (!$hamb.hasClass('active')) {
      const tl = gsap.timeline();
      tl.to('.header_hamb_line-top', { width: 22, x: 0, duration: 0.25 }).to(
        '.header_hamb_line-bottom',
        { width: 20, x: 0, duration: 0.25 },
        0.1
      );
    }
  })
  .click(() => toggleMenu(!$hamb.hasClass('active')));

$(document).on('click', (e) => {
  if (!document.querySelector('.header').contains(e.target)) {
    toggleMenu(false);
  }
});

const toggleHeader = () =>
  $('.header').toggleClass('shrink', $(window).scrollTop() > 100);

$(document).on('scroll', toggleHeader);
toggleHeader();
