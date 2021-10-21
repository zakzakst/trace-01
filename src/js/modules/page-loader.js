import $ from 'jquery';

export function PageLoaderInit() {
  const pageLoader = new PageLoader();
  pageLoader.init();
}

class PageLoader {
  constructor() {
    this.$el = $('#js-page-loader');
  }

  // 初期化
  init() {
    this.onLoad();
  }

  // ページロード完了時のイベント設定
  onLoad() {
    $(window).on('load', () => {
      $('#js-page-loader').delay(900).fadeOut(800);
    });
  }
}
