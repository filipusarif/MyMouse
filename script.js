const menuToggle = document.querySelector('.hamburger input');
const nav = document.querySelector('.navigation');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
});

console.log('helo');