
const modal = document.querySelector('.window');
const btn = document.querySelector('.number__telephone-button');
const span = document.querySelector('.modal-head-image__exit-modal');
const btnClose = document.querySelector('.modal-window__btn');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const burger = document.querySelector('.header__burger-telephone-button');

 btn.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
 }

 burger.onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
btnClose.addEventListener('click', openModal);

function openModal() {
    btnClose.onclick = function () {
        modal.style.display = "none";
        overlay.style.display = "none";
     }
  }


$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});