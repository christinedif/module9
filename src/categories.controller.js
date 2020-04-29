(function () {
    'use strict';

    angular.module('data')
    .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['MenuDataService', 'items'];
    function CategoriesController(MenuDataService, items) {
    	console.log("Cateogires items", items)
        var categoriesList = this;
        categoriesList.items = items;
    }

})();
