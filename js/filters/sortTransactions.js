(function() {
	angular.module('kiwi').filter('sortTransactions', function($log, Category, Payee) {
		return function(input, attribute) {
			if (!angular.isArray(input)) {
				return input;
			}

			var filter = this;

			this.sortAsc = function(a, b) {
				var aField = a[attribute];
				var bField = b[attribute];

				// category sort
				if (attribute == 'categoryId') {
					aField = Category.getCategoryString(aField);
					bField = Category.getCategoryString(bField);
				}
				else if (attribute == 'payeeId') {
					aField = Payee.getPayee(aField).name;
					bField = Payee.getPayee(bField).name;
				}

				// default sort
				if (aField > bField) {
					return 1;
				}
				else if (aField < bField) {
					return -1;
				}

				return 0;
			};

			this.sortDesc = function(a, b) {
				return -1 * filter.sortAsc(a, b);
			};

			if (attribute.substring(0, 1) == '-') {
				attribute = attribute.substring(1, attribute.length);
				return input.sort(sortDesc);
			}

			return input.sort(sortAsc);
		};
	});
})();