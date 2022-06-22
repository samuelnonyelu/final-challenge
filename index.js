//Open menu


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// close menu


const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// jquery to make the navbar stick to the top


$(window).scroll(function () {
    if($(window).scrollTop() > 300) {
      $('.header--sticky').css('position', 'sticky');
      $('.header--sticky').css('position', '-webkit-sticky');
      $('.header--sticky').css('top', 0);
      $('.header__nav').css("opacity", 0.9);
    } else {
        $('.header--sticky').css('position', '');
        $('.header__nav').css("opacity", 1);
    }
  })