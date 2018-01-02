(function() {
	angular.module('kiwi').factory('Session', function($rootScope) {
		return {
			activeAccount: 1,

			setActiveAccount: function(activeAccount) {
				this.activeAccount = activeAccount;
				$rootScope.$broadcast('activeAccount.update');
			},
			dateFormat: 'mm/dd/yyyy',
			setDateFormat: function(newFormat) {
				this.dateFormat = newFormat;
				$rootScope.$broadcast('dateFormat.update');
			}
		};
	});
})();