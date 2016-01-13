(function() {
	var app = angular.module('main', ['ngRoute', 'pistasControllers', 'pistasDirectives']);

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
					controller: 'ContatoController'
				}
		)
		.otherwise({
			redirectTo: '/home'
		});
	}]);
})();