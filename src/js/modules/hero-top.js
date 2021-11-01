import $ from 'jquery';

export function HeroTopInit() {
  const heroTop = new HeroTop();
  heroTop.init();
}

class HeroTop {
  constructor() {
    this.$el = $('#js-hero-top');
  }

  // 初期化
  init() {
    console.log('トップヒーロー初期化');
    if (this.$el.length) {
      //
    }
  }
}
