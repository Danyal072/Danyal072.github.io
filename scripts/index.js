document.addEventListener('DOMContentLoaded', function () {
        console.log("DOM fully loaded and parsed");

        window.addEventListener('scroll', function () {
            console.log("Scroll event triggered");

            var scroll = document.querySelector('#navbar');
            console.log(scroll); // Check if element is correctly selected

            scroll.classList.toggle("sticky", window.scrollY > 0);
        });

        // GSAP ScrollTrigger setup
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: "#navbar",
            start: "top top",
            end: "bottom top",
            markers: false, // For debugging, remove in production
            onEnter: () => {
                
                document.querySelector('#navbar').classList.add('sticky');
                document.querySelector('.label').classList.add('wow');
                document.querySelector('.burger').classList.add('wow');
        },
        onLeaveBack: () => {
                console.log("ScrollTrigger leave back");
                document.querySelector('#navbar').classList.remove('sticky');
                document.querySelector('.label').classList.remove('wow');
                document.querySelector('.burger').classList.remove('wow');
            }
        });
    });


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