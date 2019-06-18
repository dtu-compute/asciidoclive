/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                           Copyright 2016 Chuan Ji                         *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = EmberRouter.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('edit', {
    path: '/edit/:storage_type/*storage_path'
  });
  this.route('authSuccess', {
    path: '/auth_success'
  });

  // For testing base application.
  this.route('test', {
    path: '/_test'
  });
});

export default Router;
