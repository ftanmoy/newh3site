const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.onclick = function() {
    this.classList.toggle('is-active');
    if (mobileNav.style.display == 'none' && mobileNav.style.opacity == '0') {
        mobileNav.style.display = "block";
        mobileNav.style.opacity = '0.98';
    } else {
        mobileNav.style.display = "none";
        mobileNav.style.opacity = '0';
    }
};
