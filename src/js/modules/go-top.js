import $ from 'jquery';

export function GoTopInit() {
  const goTop = new GoTop();
  goTop.init();
}

class GoTop {
  constructor() {
    this.$el = $('#js-go-top');
    this.speed = 600;
  }

  // 初期化
  init() {
    if (this.$el.length) {
      this.toggleByOffset();
      this.onClick();
      this.onScroll();
    }
  }

  // 表示切り替え
  toggleByOffset() {
    const offset = $(window).scrollTop();
    if (offset > 100) {
      this.$el.fadeIn('slow');
    } else {
      this.$el.fadeOut();
    }
  }

  // クリック時のイベント設定
  onClick() {
    this.$el.on('click', (e) => {
      e.preventDefault();
      $('body,html').animate({ scrollTop: 0 }, this.speed);
    });
  }

  // スクロール時のイベント設定
  onScroll() {
    $(window).on('scroll', () => {
      this.toggleByOffset();
    });
  }
}
