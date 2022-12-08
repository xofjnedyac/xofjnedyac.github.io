const hb = document.querySelector('#hamBone');

const sn = document.querySelector('#smallNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open')
    sn.classList.toggle('open');
});