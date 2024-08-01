window.addEventListener('scroll', function() {
    var scroll = document.querySelector('#navbar');
    var burger = document.querySelector('.label');
    var a = document.querySelector('.burger');
    // var navch = document.querySelector('#navcheck');
    var navc = document.querySelector('#menu');
    scroll.classList.toggle("sticky", window.scrollY > 0);
    burger.classList.toggle("wow", window.scrollY > 0);
    a.classList.toggle("wow", window.scrollY > 0);
    navc.classList.toggle("wows", window.scrollY > 0);
    // navch.classList.toggle("wow", window.scrollY > 0);
    // b.classList.toggle("lol", window.scrollY > 0);
});

var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imaa = document.querySelector('.cursor-inOUT');
main.addEventListener('mousemove', function(e) {
    gsap.to(cursor, {
        x: e.x+1,
        y: e.y,
        ease: 'back'
    });
});
imaa.addEventListener('mouseenter', function(e) {
    cursor.innerHTML = 'Hi!';
    cursor.style.display = 'flex';
    cursor.style.justifyContent = 'center';
    cursor.style.alignItems = 'center';
    cursor.style.fontSize = '1rem';
    cursor.style.padding = '1rem';
    cursor.style.color = 'black';
    cursor.style.mixBlendMode = 'normal';

    gsap.to(cursor, {
        scale: 4,
        backgroundColor: '#fffff8c',
    }); 
    console.log('enter');
});

imaa.addEventListener('mouseleave', function() {
    cursor.innerHTML = '';
    cursor.style.mixBlendMode = 'difference';

    gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'white',
    });
    // console.log('leave');
});    

