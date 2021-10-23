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

  // タグホバー時のイベント設定
  onHover() {
    this.$els.hover((e) => {
      const target = $(e.currentTarget);
      const link = target.attr('href');
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
