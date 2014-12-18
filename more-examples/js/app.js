var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  
  //Contains the filter options
  $scope.filterOptions = {
    stores: [
      {id : 2, name : 'Show All', bedrooms: 6 },
      {id : 5, name : '3 Bedrooms', bedrooms: 3 },
      {id : 6, name : '2 Bedrooms', bedrooms: 2 },
      {id : 7, name : '1 Bedroom', bedrooms: 1 } 
    ]
  };
  
  //Contains the sorting options
  $scope.sortOptions = {
    stores: [
      {id : 1, name : 'Price Highest to Lowest' },      
      {id : 2, name : 'Price Lowest to Highest' },
      ]
  };
  
  //Mapped to the model to filter
  $scope.filterItem = {
    store: $scope.filterOptions.stores[0]
  }
  
  //Mapped to the model to sort
  $scope.sortItem = {
    store: $scope.sortOptions.stores[0]
  };
  
  //Watch the sorting model - when it changes, change the
  //ordering of the sort (descending / ascending)
  $scope.$watch('sortItem', function () {
    console.log($scope.sortItem);
    if ($scope.sortItem.store.id === 1) {
      $scope.reverse = true;
    } else {
      $scope.reverse = false;
    }
  }, true);
  
  //Custom filter - filter based on the bedrooms selected
  $scope.customFilter = function (data) {
    if (data.bedrooms === $scope.filterItem.store.bedrooms) {
      return true;
    } else if ($scope.filterItem.store.bedrooms === 6) {
      return true;
    } else {
      return false;
    }
  };  
  
  //The data that is shown
  $scope.data = [
    {
      name: "Ashbrook Apartments",
      price: 1980,
      bedrooms: 1,
	  bathrooms: 2,
	  image: "img/ashbrook-photo.jpg"
    },
    {
      name: "Georgetown Row Apartments",
      price: 2000,
      bedrooms: 2,
	  bathrooms: 2,
	  image: "img/georgetown-photo.jpg"
    },
    {
      name: "Greensboro Luxury Apartments",
      price: 3600,
      bedrooms: 3,
	  bathrooms: 2,
	  image: "img/greensboro-photo.jpg"
    },
    {
      name: "DC Metroville Apartments",
      price: 1700,
      bedrooms: 1,
	  bathrooms: 3,
	  image: "img/dc-photo.jpg"
    },
    {
      name: "Brickville Metro Center Apartments",
      price: 3200,
      bedrooms: 2,
	  bathrooms: 1,
	  image: "img/brickville-photo.jpg"
    },
    {
      name: "Arlington National Apartments",
      price: 2400,
      bedrooms: 2,
	  bathrooms: 2,
	  image: "img/arlington-photo.jpg"
    }
  ];
});