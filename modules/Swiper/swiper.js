// Skrypt odpowiedzialny za obsługę swipera

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000, // Czas opóźnienia 
    disableOnInteraction: false, // Po false automatyczne przesuwanie slidów 
  },


  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


