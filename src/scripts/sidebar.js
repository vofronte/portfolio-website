const hamburgerBtn = $('.hamburger-btn');
const body = $('body');

hamburgerBtn.on('click', () => {
    hamburgerBtn.toggleClass('hamburger-btn--closed');
    hamburgerBtn.hasClass('hamburger-btn--closed') ? body.css('overflow', 'hidden') : body.css('overflow', 'auto');
});