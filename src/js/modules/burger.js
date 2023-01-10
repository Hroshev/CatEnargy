const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if(isMobile.any()){
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0){
    for(let i = 0; i < menuArrows.length; i++){
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function(e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.burger').offsetHeight;
      
      if (iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

/* Change logo */
const burgerImage = document.querySelector('.burger__logo-img');

function modifyLogo(){
  const windowInnerWidth = window.outerWidth;
  if (windowInnerWidth > 992) {
    burgerImage.setAttribute('src', './img/logo-desktop.svg');
  }
  if (windowInnerWidth <= 992) {
    burgerImage.setAttribute('src', './img/logo-tablet.svg');
  }
  if (windowInnerWidth <= 768) {
    burgerImage.setAttribute('src', './img/logo-mobile.svg');
  }
}

window.addEventListener("DOMContentLoaded", modifyLogo);
window.addEventListener("resize", modifyLogo);

/* Active Pages */
window.addEventListener("DOMContentLoaded", activePage);

function activePage() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".menu__link");

  navLinks.forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("menu__link--active");
    }
  });
}