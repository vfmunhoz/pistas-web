(function() {
	var app = angular.module('main', []);

	app.controller('LoginController', function() {
		this.user = unauthUser;
	});
	
	var unauthUser = {name: 'Vinícius Munhoz',
					  authenticated: false};
})();