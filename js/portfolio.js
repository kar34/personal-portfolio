var portfolioInfo;
var myApp = angular.module('myApp', ['ui.router'])

// sets up the config states
.config(function($stateProvider) {
  
  $stateProvider  
    
    .state('home', {
      url:'',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
    })

    .state('aboutme', {
      url:'/aboutme',
      templateUrl: 'templates/aboutme.html',
      controller: 'AboutMeController',
    })

    .state('portfolio', {
      url:'/portfolio',
      templateUrl: 'templates/portfolio.html',
      controller: 'PortfolioController',
    })
})


// sets the controller
.controller('PortfolioController', function($scope, $http){
  $http.get('json/portfolio.json').success(function(portfolio) {
    portfolioInfo = $scope.portfolio = portfolio;
  })
})

