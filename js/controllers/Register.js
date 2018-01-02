(function() {
	angular.module('kiwi').controller('RegisterController', function($http, $log, $scope, Session, Category, Payee, Tag) {
		var controller = this;

		this.selectedTransaction = null;

		this.sortOrder = 'date';

		this.newTransaction = {
			id: null,
			date: new Date(),
			payeeId: null,
			categoryId: null,
			tags: [],
			memo: null,
			amount: null,
			status: null,
			accountId: null,
			deleted: null
		};

		this.transactions = [
		{
			id: 1,
			date: new Date(88, 2, 3),
			payeeId: 1,
			categoryId: 1,
			tags: [1, 2],
			memo: '',
			amount: -10.34,
			status: 'P',
			accountId: 1,
			deleted: false
		},
		{
			id: 2,
			date: new Date(88, 2, 17),
			payeeId: 2,
			categoryId: 1,
			tags: [2],
			memo: '',
			amount: -13.42,
			status: 'P',
			accountId: 1,
			deleted: false
		},
		{
			id: 3,
			date: new Date(88, 2, 10),
			payeeId: 3,
			categoryId: 2,
			tags: [1],
			memo: '',
			amount: 1233.42,
			status: 'P',
			accountId: 1,
			deleted: false
		}];

		this.transactions.sort(function(a, b) {
			return a - b;
		});

		this.isActive = function(accountId) {
			return accountId == Session.activeAccount;
		};

		this.getCategory = function(categoryId) {
			return Category.getCategory(categoryId);
		};

		this.getCategoryString = function(categoryId) {
			return Category.getCategoryString(categoryId);
		};

		this.getPayee = function(payeeId) {
			return Payee.getPayee(payeeId);
		};

		this.getTag = function(tagId) {
			return Tag.getTag(tagId);
		};

		this.setSortOrder = function(sortColumn) {
			if (this.sortOrder == sortColumn) {
				this.sortOrder = '-' + sortColumn;
			}
			else if ('-' + this.sortOrder == sortColumn) {
				this.sortOrder = sortColumn;
			}
			else {
				this.sortOrder = sortColumn;
			}
		};

		this.isSorted = function(sortColumn) {
			return this.sortOrder.replace('-', '') == sortColumn;
		};

		this.getGlyphClass = function(sortColumn) {
			if (this.sortOrder == sortColumn) {
				return 'glyphicon-triangle-top';	
			}
			if (this.sortOrder == '-' + sortColumn) {
				return 'glyphicon-triangle-bottom';
			}

			return '';
		};

	});
})();