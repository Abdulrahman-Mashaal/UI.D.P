// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const heroSlider = new Swiper('.heroSlider', {
  grabCursor: true,
  speed: 500,
  effect: 'slide',
  loop: true,
  mousewheel: {
    invert: false,
    sensitivity: 1,
  },
  on: {
    init: function () {},
    slideChange: function () {},
    click: function () {
      // console.log(this);
    },
  },
});
