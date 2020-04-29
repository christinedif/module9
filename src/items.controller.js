(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['$stateParams', 'item', '$scope'];
function ItemsController($stateParams, item, $scope) {
    
    var itemDetail = this;
    itemDetail.shortName = $stateParams.itemShortName;
    console.log("In ItemController..Injected Item through States revolve:", item, $stateParams)

    console.log("Category ShortName:", itemDetail.shortName)

    var k= [];
    // console.log("First Item Check:", item[0], item.length)
    for (var i = 0; i < item.length; i++) 
    { 
    	// console.log(item[i])
    	var obj={
    		short_name: item[i].short_name,
    		name: item[i].name,
    		description: item[i].description,
    		smallprice: item[i].price_small,
    		largeprice: item[i].price_large,
    	}
    	k.push(obj)
    }
    $scope.k = k;
}

})();
