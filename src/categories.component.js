(function () {
'use strict';

angular.module('data')
.component('menuApp', {
  templateUrl: 'src/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();

