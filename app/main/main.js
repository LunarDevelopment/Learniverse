'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    console.log('Allo! Allo from your module: ' + 'main');

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/list');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as list'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            controller: 'DetailCtrl as detail'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
      .state('main.about', {
        url: '/about',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/about.html',
            controller: 'AboutCtrl as about'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/settings.html',
            controller: 'SettingsCtrl as settings'
          }
        }
      })
      .state('main.feedback', {
        url: '/feedback',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/feedback.html',
            controller: 'FeedbackCtrl as feedback'
          }
        }
      });
  })
  .run(function ($ionicPlatform, $cordovaStatusbar) {
    $ionicPlatform.ready(function() {
      $cordovaStatusbar.overlaysWebView(true);
      //$cordovaStatusbar.style(1); //Light
      //$cordovaStatusbar.style(2); //Black, transulcent
      $cordovaStatusbar.style(3); //Black, opaque
    });
  });
