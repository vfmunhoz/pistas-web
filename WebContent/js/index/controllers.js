'use strict';

(function() {
	var pistasControllers = angular.module('pistasControllers', []);
	
	pistasControllers.controller('LoginController', ['$scope', function($scope) {

		$scope.user= {};

		$scope.autenticar = function(user) {
			alert("Email: " + user.email);
			alert("Senha: " + user.senha);

			$scope.reset();
		};

		$scope.reset = function() {
			$scope.user.email = '';
			$scope.user.senha = '';
		};

		$scope.reset();
	}]);
})();
