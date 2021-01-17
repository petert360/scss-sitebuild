'use strict';

// https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
/*
let myNav = document.getElementById('navbar');
window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 100 ) {
        myNav.classList.add("bg-light");
    } 
    else {
        myNav.classList.remove("bg-light");
    }
};
*/
//https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link/7717572#7717572
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});