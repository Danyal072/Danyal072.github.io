var navbar = document.querySelector('#navbar');


function stickyNavbar() {
  
    if (window.scrollY > 0) {
        navbar.style.postion = 'fixed';
        console.log('scrolling');
    } else {
        navbar.style.postion = 'relative';
    }
    
}

stickyNavbar();