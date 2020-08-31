/* global $ */
import 'zepto/dist/zepto.min';
// import svg4everybody from 'svg4everybody';
// import './lib/foundation-explicit-pieces';

// svg4everybody();

const toggleHeader = () =>
  $('.header').toggleClass('shrink', $(window).scrollTop() > 100);

$(document).on('scroll', toggleHeader);
toggleHeader();
