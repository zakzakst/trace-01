import $ from 'jquery';

import { HeaderInit } from './modules/header';
import { FooterGalleryInit } from './modules/footer-gallery';
import { GoTopInit } from './modules/go-top';
// import { pageLoader } from './modules/page-loader';

$(function () {
  HeaderInit();
  FooterGalleryInit();
  GoTopInit();
  // pageLoader();
});
