(function() {
	angular.module('kiwi').filter('outflow', function() {
		return function(amount) {
			return amount < 0 ? Math.abs(amount) : '';
		};
	});	
})();