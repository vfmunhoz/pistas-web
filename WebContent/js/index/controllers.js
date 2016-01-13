'use strict';

(function() {
	var pistasControllers = angular.module('pistasControllers', ['main.services']);
	
	pistasControllers.controller('LoginController', function($scope) {

		$scope.user = {};

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
	});

	pistasControllers.controller('ContatoController', function($scope, alertService) {
		$scope.contato = {};
		
		$scope.enviar = function(contato) {
			$scope.$broadcast('show-errors-check-validity');

			if($scope.contatoForm.$valid) {
				alertService.add('success', 'Mensagem enviada com sucesso.');
				
				$scope.reset();
			} else {
				alertService.add('danger', 'Preencha os campos obrigatórios (*) do formulário.');
			}
		}
		
		$scope.reset = function() {
			$scope.$broadcast('show-errors-reset');

			$scope.contato.nome = '';
			$scope.contato.email = '';
			$scope.contato.telefone = '';
			$scope.contato.mensagem = '';
		};
		
		$scope.reset();
	});
})();
