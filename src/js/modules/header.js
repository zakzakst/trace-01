import $ from 'jquery';

export function HeaderInit() {
  const header = new Header();
  header.init();
}

class Header {
  constructor() {
    this.$buttonEl = $('#js-header__button');
    this.$menuEl = $('#js-header__menu');
    this.$menuItemEls = $('.header__menu-item');
  }

  // 初期化
  init() {
    this.onClickButton();
    this.onClickMenuItem();
  }

  // メニューを開く
  menuOpen() {
    this.$menuEl.slideDown();
    this.$menuEl.addClass('--open');
    this.$buttonEl.addClass('--open');
  }

  // メニューを閉じる
  menuClose() {
    this.$menuEl.slideUp();
    this.$menuEl.removeClass('--open');
    this.$buttonEl.removeClass('--open');
  }

  // メニューを開閉する
  menuToggle() {
    if (this.$menuEl.hasClass('--open')) {
      // 開いている状態の場合、メニューを閉じる
      this.menuClose();
    } else {
      // 閉じている状態の場合、メニューを開く
      this.menuOpen();
    }
  }

  // 子メニューを開く
  menuChildOpen($targetEl) {
    console.log($targetEl);
  }

  // 子メニューを閉じる
  menuChildClose($targetEl) {
    console.log($targetEl);
  }

  // 子メニューを開閉する
  menuChildToggle($targetEl) {
    if ($targetEl.hasClass('--open')) {
      // 開いている状態の場合、メニューを閉じる
      this.menuChildClose($targetEl);
    } else {
      // 閉じている状態の場合、メニューを開く
      this.menuChildOpen($targetEl);
    }
  }

  // ボタンクリック時のイベント設定
  onClickButton() {
    this.$buttonEl.on('click', () => {
      this.menuToggle();
    });
  }

  // メニュークリック時のイベント設定
  onClickMenuItem() {
    // NOTE: fontawesomeのスクリプトの関係で、アイコン要素にイベント設定するのは上手くいかなかった
    this.$menuItemEls.on('click', (e) => {
      // TODO: クリックされた要素がアイコンだった場合の分岐追加
      e.preventDefault();
      console.log(e);
    });
  }
}
