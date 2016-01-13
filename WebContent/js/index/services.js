'use strict';

(function() {
	var appServices = angular.module('main.services', ['ui.bootstrap']);
	
	appServices.factory('alertService', function($rootScope) {
		var alertService = {};
		
		$rootScope.alerts = [];
		
		alertService.add = function(type, msg) {
			$rootScope.alerts.push({'type': type,
									'msg': msg,
									closeAlert: function(index) {
										$rootScope.alerts.splice(index, 1);
									}
			});
		};
		
		alertService.closeAlert = function(index) {
			$rootScope.alerts.splice(index, 1);
	    };
	    
	    return alertService;
	});
})();