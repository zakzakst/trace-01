import $ from 'jquery';

export function GoTopInit() {
  const goTop = new GoTop();
  goTop.init();
}

class GoTop {
  constructor() {
    this.$el = $('#js-go-top');
  }

  // 初期化
  init() {
    console.log('トップへ戻る初期化');
  }
}

// export function GoTop() {
//   const el = $('#js-go-top');
//   if (!el) {
//     return;
//   }
//   addEventGoTop();

//   function addEventGoTop() {
//     const speed = 600;
//     el.find('a').on('click', (e) => {
//       e.preventDefault();
//       $('body,html').animate({ scrollTop: 0 }, speed);
//     });
//   }
// }
