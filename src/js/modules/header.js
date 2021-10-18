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
  menuChildOpen($targetItemEl) {
    const $childEl = $targetItemEl.find('.header__menu-child');
    $childEl.slideDown();
    $targetItemEl.addClass('--open');
  }

  // 子メニューを閉じる
  menuChildClose($targetItemEl) {
    const $childEl = $targetItemEl.find('.header__menu-child');
    $childEl.slideUp();
    $targetItemEl.removeClass('--open');
  }

  // 子メニューを開閉する
  menuChildToggle($targetItemEl) {
    if ($targetItemEl.hasClass('--open')) {
      // 開いている状態の場合、メニューを閉じる
      this.menuChildClose($targetItemEl);
    } else {
      // 閉じている状態の場合、メニューを開く
      this.menuChildOpen($targetItemEl);
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
      const $targetEl = $(e.target);
      const targetElTagName = $targetEl[0].tagName;
      const $targetItemEl = $($targetEl.closest('.header__menu-item')[0]);
      if (targetElTagName !== 'A' && $targetItemEl.hasClass('--has-child')) {
        // クリックされた要素がaタグでない（アイコン要素）場合、子リンクを開閉する
        this.menuChildToggle($targetItemEl);
        e.preventDefault();
      }
    });
  }
}
