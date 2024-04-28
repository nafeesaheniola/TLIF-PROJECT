function openNav() {
  document.getElementById("sideBar").style.width = "100%";
  document.getElementById("sideNav").style.width = "100%";
}

/*Close navigation*/
function exitNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideNav").style.width = "0";
}

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
