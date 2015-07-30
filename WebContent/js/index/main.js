(function() {
	var app = angular.module('main', ['ngRoute', 'ui.bootstrap']);

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

	app.controller('AlertDemoCtrl', function($scope) {
		$scope.alerts = [
		                 { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
		                 { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		               ];
		
		$scope.addAlert = function() {
			$scope.alerts.push({type: 'danger', msg: 'Another alert!'});
		};
		
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
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