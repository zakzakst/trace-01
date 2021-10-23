import $ from 'jquery';

import { HeaderInit } from './modules/header';
import { FooterGalleryInit } from './modules/footer-gallery';
import { GoTopInit } from './modules/go-top';
import { PageLoaderInit } from './modules/page-loader';
import { BlogCardInit } from './modules/blog-card';

$(function () {
  HeaderInit();
  FooterGalleryInit();
  GoTopInit();
  PageLoaderInit();
  BlogCardInit();
});
