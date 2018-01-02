(function() {
	angular.module('kiwi').filter('inflow', function() {
		return function(amount) {
			return amount > 0 ? amount : '';
		};
	});
})();