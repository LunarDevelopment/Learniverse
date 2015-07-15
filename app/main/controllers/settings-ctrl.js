'use strict';
angular.module('main')
  .controller('SettingsCtrl', function ($localstorage) {

    console.log('Hello from your Controller: SettingsCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    $localstorage.set('key', 'value');
    console.log($localstorage.get('key'));
    $localstorage.setObject('objName', {
      name: 'Thoughts',
      text: 'Today was a good day'
    });
  });
