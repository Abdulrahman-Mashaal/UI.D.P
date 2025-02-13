// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const anmaTopSpecialtiesSlider = new Swiper('.anma-top-specialties', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".anma-top-specialties__swiper-button-next",
        prevEl: ".anma-top-specialties__swiper-button-prev",
      },
    // loop: true,
    breakpoints:{
        470: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1200: {
            slidesPerView: 4,
        },

    },
    pagination: {
        el: ".anma-top-specialties__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    },

});
const anmaServicesSlider = new Swiper('.anma-services', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: ".anma-services__swiper-button-next",
        prevEl: ".anma-services__swiper-button-prev",
      },
    // loop: true,
    breakpoints:{
        1200: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 1,
        }

    },
    pagination: {
        el: ".anma-services__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    },

});
const futurefaceNewsSlider = new Swiper('.futureface-news', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
        nextEl: ".futureface-news__swiper-button-next",
        prevEl: ".futureface-news__swiper-button-prev",
    },
    loop: true,
    breakpoints:{
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 32,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1.2,
        },
        430: {
            slidesPerView: 1.2,
        }

    },
    pagination: {
        el: ".futureface-news__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500
    },

});
// FIXME: speed is not working like I expected
const futurefaceOurClientsSlider = new Swiper('.futureface-our-clients', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 32
        }
    }
});
