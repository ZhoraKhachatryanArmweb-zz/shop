import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  /**
   *   /shop/items   list of items
   *   /shop/items/new    create a new item (form)
   * 
   */
  // http://localhost:4200/not-shops
  this.route('shops', { path: 'shops'});
  this.route('shop', { path: 'shop/:name'});
});

export default Router;
