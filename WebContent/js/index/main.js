(function() {
	var app = angular.module('main', ['ngRoute', 'ui.bootstrap', 'ui.mask', 'main.services']);

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

	app.controller('CadastroController', function($scope, alertService) {
		$scope.cadastrar = function(form, usuario) {
			$scope.usuario = {};
			
			form.$setPristine();
			form.$setUntouched();
			
			alertService.add('success', 'Usuário cadastrado com sucesso!');
		}
	});

	app.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'pages/home.html',
		});

		$routeProvider.when('/home', {
			templateUrl : 'pages/home.html',
		});

		$routeProvider.when('/pistas', {
			templateUrl : 'pages/pistas.html',
		});

		$routeProvider.when('/cadastro', {
			templateUrl : 'pages/cadastro.html',
		});
	});
})();