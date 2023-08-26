const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputEL = document.querySelector('.container__input');
const btnEl = document.querySelector('.container__btn');
const imgEl = document.querySelector('.container__img');
const errorMsgEl = document.querySelector('.container__input--error-msg');
const viewportWidth = window.innerWidth;


if (viewportWidth < 1290) imgEl.src = 'images/hero-mobile.jpg';

btnEl.addEventListener('click', () => {
    if (inputEL.value.match(emailRegex))  errorMsgEl.classList.remove('active');
    else errorMsgEl.classList.add('active');
});
