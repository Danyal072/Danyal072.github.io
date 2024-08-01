const scrolF = () => {
    
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
    
}
window.addEventListener('scroll', scrolF);

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

var tl = gsap.timeline();

tl.from('#left-pic', {
    x: -500,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#left-pic',
        trigger: '#about-section',
        start: 'top 100%',
        end: 'top 0%',
        markers: false,
        scrub: 1,
        // pin: true,
        ease: 'back'
        
    }  ,
    
})  
tl.from('#right-content', {
    x: 500,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#right-content',
        trigger: '#about-section',
        start: 'top 100%',
        end: 'top 0%',
        markers: false,
        scrub: 1,
        // pin: true,
        ease: 'back'
        
    }
})  


tl.from('#third-page #title', {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#title',
        trigger: '#third-page',
        start: 'top 120%',
        end: 'top 30%',
        markers: false,
        scrub: 1,
        // pin: true,
        ease: 'power4.in'
    }  ,
})
tl.from('#third-page #icon', {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#icon',
        trigger: '#third-page',
        start: 'top center',
        end: 'top center',
        markers: false,
        scrub: 1,
        // pin: true,
        ease: 'back'
    }  ,
})

tl.from('#empty-emoki', {
    scale: 0,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#empty-emoki',
        trigger: '#fifth-page',
        start: 'top 120%',
        end: 'top 30%',
        markers: false,
        scrub: 5,
        // pin: true,
        ease: 'back'
    }  ,
})
tl.from('#left-quote', {
    scale: 0,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#empty-emoki',
        trigger: '#fifth-page',
        start: 'top 120%',
        end: 'top 30%',
        markers: false,
        scrub: 1,
        // pin: true,
        ease: 'back'
    }  ,
})  
tl.from('#right-form', {
    opacity:0,
    x: 500,
    duration: 1,
    scrollTrigger: {
        scrollTrigger: '#right-form',
        trigger: '#fifth-page',
        start: 'top 120%',
        end: 'top 30%',
        markers: false,
        scrub: 8,
        // pin: true,
        ease: 'back'
    }  ,
})