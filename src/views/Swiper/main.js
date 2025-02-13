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


// Initialize Swiper for tabs
const roboxUsageTabSlider = new Swiper(".usage-tabs", {
    slidesPerView: "auto",
    spaceBetween: 15,
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true
  });
  
  // Click event for tab items
  const snbSwiperItems = document.querySelectorAll(".usage-tabs .swiper-wrapper .swiper-slide a");
  snbSwiperItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      snbSwiperItems.forEach(el => el.parentElement.classList.remove("on"));
      const target = item.parentElement;
      target.classList.add("on");
      muCenter(target);
    });
  });
  
  const muCenter = (target) => {
    const snbwrap = document.querySelector(".usage-tabs .swiper-wrapper");
    const box = document.querySelector(".usage-tabs");
    const boxHalf = box.clientWidth / 2;
    const targetPos = target.offsetLeft + target.clientWidth / 2;
    const pos = targetPos - boxHalf;
  
    // Ensure pos is within valid bounds
    const minPos = 0;
    const maxPos = snbwrap.scrollWidth - box.clientWidth;
  
    snbwrap.style.transition = "transform 0.25s";
    snbwrap.style.transform = `translate3d(${Math.min(Math.max(pos, minPos), maxPos) * -1}px, 0, 0)`;
  };
  
  // Initialize Swiper for content
  const roboxUsageSlider = new Swiper(".usage-content", {
    slidesPerView: 1,
    spaceBetween: 32,
    allowTouchMove: true,
    autoplay: {
        delay: 2000
    },
    thumbs: {
      swiper: roboxUsageTabSlider
    }, 
    on: {
      slideChange: function () {
        const target = this.activeIndex;
        snbSwiperItems.forEach(el => el.parentElement.classList.remove("on"));
        snbSwiperItems[target].parentElement.classList.add("on");
        muCenter(snbSwiperItems[target].parentElement);
      }
    }
  });
  