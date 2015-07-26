(function() {
	var app = angular.module('main', []);

	app.controller('LoginController', ['$scope', function($scope) {
		$scope.authenticate = function(userToAuthenticate) {
			userToAuthenticate.authenticated = true;
			userToAuthenticate.name = 'Teste';
			
			$scope.user = userToAuthenticate;
		};
		
		$scope.logout = function() {
			$scope.user = {authenticated: false};
		};

		$scope.logout();
	}]);
})();