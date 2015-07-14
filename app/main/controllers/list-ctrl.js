'use strict';
angular.module('main')
  .controller('ListCtrl', function () {

    console.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    var vm = this;
    vm.images = [];
    vm.loadImages = function () {
      for (var i = 0; i < 100; i++) {
        vm.images.push({
          id: i,
          src: 'http://placehold.it/50x50'
        });
      }
    };
  });
