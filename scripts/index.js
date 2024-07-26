window.addEventListener('scroll', function() {
    var scroll = document.querySelector('#navbar');
    var burger = document.querySelector('.label');
    var a = document.querySelector('.burger');
    scroll.classList.toggle("sticky", window.scrollY > 0);
     burger.classList.toggle("wow", window.scrollY > 0);
     a.classList.toggle("wow", window.scrollY > 0);
    // b.classList.toggle("lol", window.scrollY > 0);
});

