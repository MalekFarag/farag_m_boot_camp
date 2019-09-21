(() => {
    console.log('Fired.');

//burger menu
const burger = document.querySelector('.burgerBut'),
nav    = document.querySelector('.mainNav'),
header = document.querySelector('header'),
body   = document.querySelector('body');

function showNav(){
    console.log('You touched my burger >:(');
    nav.classList.toggle('hidden');
    burger.classList.toggle('open');
    header.classList.toggle('bg');
    body.classList.toggle('bg');
}

burger.addEventListener('click', showNav);

//portfolio
const lightbox   = document.querySelector('.lightbox'),
      lightImg   = document.querySelector('.lightImg'),
      img        = document.querySelector('#lightImg'),
      thumbnails = document.querySelectorAll('.light'),
      xLight     = document.querySelector('.xLight');

function openLightbox(){
    lightbox.classList.remove('hidden');
}

function closeLightbox(){
    lightbox.classList.add('hidden');
    lightImg.innerHTML = null;

}

function openThumbnail(){
    let source = this.src;
    img.src = source;
    openLightbox();

    console.log('Thumbnail clicked.');
}

        thumbnails.forEach(thumb => thumb.addEventListener('click', openThumbnail));
        xLight.addEventListener('click', closeLightbox);

})();