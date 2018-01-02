(function() {
	angular.module('kiwi').filter('date', function() {
		return function(date) {
			return date.toDateString();
		};
	});
})();