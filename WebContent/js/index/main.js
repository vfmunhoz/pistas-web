(function() {
	var app = angular.module('main', []);

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
})();