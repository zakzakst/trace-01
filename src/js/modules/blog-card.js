import $ from 'jquery';

export function BlogCardInit() {
  const blogCard = new BlogCard();
  blogCard.init();
}

class BlogCard {
  constructor() {
    this.$els = $('.blog-card');
  }

  // 初期化
  init() {
    if (this.$els.length) {
      this.onHover();
    }
  }

  // ホバー時のイベント設定
  onHover() {
    this.$els.hover((e) => {
      const target = $(e.currentTarget);
      const link = target.attr('href');
      // タグホバー時の挙動を設定
      $('.blog-card__tag', target).hover(
        (targetTag) => {
          target.attr('href', $(targetTag.currentTarget).data('url'));
        },
        () => {
          target.attr('href', link);
        }
      );
    });
  }
}
