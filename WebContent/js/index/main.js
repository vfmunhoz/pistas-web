(function() {
	var app = angular.module('main', ['ngRoute', 'pistasControllers']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home',
				{
					templateUrl: 'pages/home.html',
					controller: 'LoginController'
				}
		)
		.when('/contato',
				{
					templateUrl: 'pages/contato.html',
					controller: 'LoginController'
				}
		)
		.otherwise({
			redirectTo: '/home'
		});
	}]);
})();