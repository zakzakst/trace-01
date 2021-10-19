import $ from 'jquery';
import 'slick-carousel';

export function FooterGalleryInit() {
  const footerGallery = new FooterGallery();
  footerGallery.init();
}

class FooterGallery {
  constructor() {
    this.sliderEl = $('#js-footer-gallery__slider');
    this.options = {
      autoplay: true,
      draggable: true,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  }

  // 初期化
  init() {
    if (this.sliderEl.length) {
      this.sliderEl.slick(this.options);
    }
  }
}
