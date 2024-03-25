document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".courses_swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true
    },
    slidesPerView: 1,
    spaceBetween:30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed:2000,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".option_swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true
    },
    slidesPerView: 1,
    spaceBetween:30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed:2000,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  } );
  
  function setEqualHeight () {
    let slides = document.querySelectorAll( ".option_swiper .swiper-slide" )
    let maxHeight = 0

    slides.forEach( ( slide ) => {
      slide.style.height = ""
      if ( slide.offsetHeight > maxHeight ) {
        maxHeight = slide.offsetHeight
      }
    } )

    slides.forEach( ( slide ) => {
      slide.style.height = maxHeight + "px"
    } )
  }
  setEqualHeight()
  window.addEventListener( "resize", setEqualHeight )
});
