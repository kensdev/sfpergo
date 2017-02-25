var myApp=angular.module("myApp",["ngRoute"])


.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){

  $routeProvider
        .when('/Home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController as home'
          })

        .when('/Brand', {
            templateUrl: 'view/brand.html',
            controller: 'BrandController as brand'
          })

            .when('/Type', {
            templateUrl: 'view/type.html',
            controller: 'TypeController as type'
          })

            .when('/Productlist', {
            templateUrl: 'view/productlist.html',
            controller: 'ProductlistController as productlist'
          })
            .when('/Product', {
            templateUrl: 'view/product.html',
            controller: 'ProductController as product'
          })


      $locationProvider.html5Mode(true);
}])

.controller('MainCtrl', ['$scope','$route', '$routeParams', '$location',
  function MainCtrl($scope,$route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    

}])

.controller("HomeController", function($scope) {

  $scope.categoryName = ["Wooden Floor","Bath Fitting","Tiles","Wellness"];
 $scope.brandpage = 'Brand';
  
})

.controller("BrandController", function($scope) {

  $scope.typepage = 'Type';
  $scope.brandName = ["pergo","vitra"];
  
  
})

.controller("TypeController", function($scope) {

  $scope.productlistpage = 'Productlist';
  $scope.typeName = ["original laminate","wood parquate"];
  
  
})



.controller("ProductlistController", function($scope) {

   $scope.productpage = 'Product';
  $scope.products = [
    {name:'pruduct1', code:'PR01', image:'pr01.png'},
    {name:'product2', code:'PR02', image:'pr02.png'},
    {name:'product3', code:'PR03', image:'pr03.png'},
    {name:'product4', code:'PR04', image:'pr04.png'},
    {name:'product5', code:'PR05', image:'pr05.png'},
    {name:'product6', code:'PR06', image:'pr06.png'},
    {name:'product7', code:'PR07', image:'pr07.png'},
    {name:'product8', code:'PR08', image:'pr08.png'},
    {name:'product9', code:'PR09', image:'pr09.png'},
    {name:'product10', code:'PR10', image:'pr10.png'}
  ];
  
})


.controller("ProductController", function($scope) {

  
  product01 = {name:'pruduct1', code:'PR01', image:'pr01.png'}
  
  
})
