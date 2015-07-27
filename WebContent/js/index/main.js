(function() {
	var app = angular.module('main', ['ngRoute']);

	app.controller('HomeController', function($scope) {
		$scope.message = 'Home!';
	});
	
	app.controller('PistasController', function($scope) {
		$scope.message = 'Pistas!';
	});

	app.controller('MainController', function($scope) {
		$scope.message = 'Main!';
	});
	
	app.controller('LoginController', function() {
		this.user = {authenticated: false};
		
		this.authenticate = function() {
			this.user.authenticated = true;
			this.user.name = 'Teste';
		};
		
		this.logout = function() {
			this.user = {authenticated: false};
		};
	});

	app.controller('NavbarController', function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	});
	
	app.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'HomeController'
		});
		
		$routeProvider.when('/home', {
			templateUrl : 'pages/home.html',
			controller : 'HomeController'
		});
		
		$routeProvider.when('/pistas', {
			templateUrl : 'pages/pistas.html',
			controller : 'PistasController'
		});
	});
})();