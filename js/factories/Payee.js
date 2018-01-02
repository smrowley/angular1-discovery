(function() {
	angular.module('kiwi').factory('Payee', function($http, $log) {
		return {
			payees: [
			{
				id: 1,
				name: 'Target',
				frequentCategories: [1, 2]
			},
			{
				id: 2,
				name: 'Panera',
				frequentCategories: [1, 2]
			},
			{
				id: 3,
				name: 'Amazon',
				frequentCategories: [1, 2]
			}
			],
			getPayee: function(payeeId) {
				for (var i in this.payees) {
					if (this.payees[i].id == payeeId) {
						return this.payees[i];
					}
				}
			}
		};
	});
})();