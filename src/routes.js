(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  // Categories
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/main-categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) { 
        return MenuDataService.getAllCategories();
      }]
    }	  
  })


   .state('itemDetail', {
    url: '/items/{itemShortName}',
    templateUrl: 'src/items.template.html',
    controller: 'ItemsController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemShortName)
                .then(function (items) {
                  console.log("In MenuDataService - State Params:",$stateParams.itemShortName)
                  console.log("Returned Items:", items)
                  return items.menu_items;
                });
            }]
    }
  });
  
  
}

})();
