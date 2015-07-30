(function() {
	var app = angular.module('main', ['ngRoute', 'ui.bootstrap', 'main.services']);

	app.controller('HomeController', function($scope) {
		$scope.message = 'Home!';
	});
	
	app.controller('PistasController', function($scope) {
		$scope.message = 'Pistas!';
	});

	app.controller('MainController', function($scope) {
		$scope.message = 'Main!';
	});
	
	app.controller('LoginController', function($scope) {
		$scope.user = {authenticated: false};
		
		$scope.authenticate = function(loginForm) {
			$scope.user.authenticated = true;
			$scope.user.name = 'Teste';
			
			loginForm.$setPristine();
			loginForm.$setUntouched();
		};
		
		
		$scope.logout = function() {
			$scope.user = {authenticated: false};
			$scope.loginCtrl.user = {authenticated: false}
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