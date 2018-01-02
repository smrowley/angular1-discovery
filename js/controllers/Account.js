(function() {
	angular.module('kiwi').controller('AccountController', function($http, $log, $scope, Session) {
		var controller = this;

		this.activeAccount = Session.activeAccount;

		this.accounts = [
		{
			id: 1,
			name: 'Checking',
			index: 0
		},
		{
			id: 2,
			name: 'Cash',
			index: 1
		},
		{
			id: 3,
			name: 'Savings',
			index: 2
		}];

		$scope.$on('activeAccount.update', function(event) {
			controller.activeAccount = Session.activeAccount;
		});

		this.isActive = function(activeAccount) {
			return this.activeAccount === activeAccount;
		};

		this.setActiveAccount = function(activeAccount) {
			$log.debug('Setting active account: ' + activeAccount);
			//this.activeAccount = activeAccount;
			Session.setActiveAccount(activeAccount);
		}

		$scope.sortIndexes = function(oldIndex, newIndex) {
			if (oldIndex == newIndex) {
				$log.debug('no sort');
				return;
			}
			$log.debug('sorting');

			for (i in controller.accounts) {
				$log.debug('before: [' + controller.accounts[i].name + ']' + controller.accounts[i].index);
				if (controller.accounts[i].index > oldIndex && controller.accounts[i].index <= newIndex) {
					controller.accounts[i].index--;
				}
				else if (controller.accounts[i].index < oldIndex && controller.accounts[i].index >= newIndex) {
					controller.accounts[i].index++;
				}
				else if (controller.accounts[i].index == oldIndex) {
					controller.accounts[i].index = newIndex;
				}
				$log.debug('after: [' + controller.accounts[i].name + ']' + controller.accounts[i].index);
			}
		};

		this.tabConfig = {
			group: 'accounts',
			animation: 150,
			onSort: function(evt) {
				$log.debug('old: ' + evt.oldIndex + ', new: ' + evt.newIndex);
				$scope.sortIndexes(evt.oldIndex, evt.newIndex);
			}
		};
	});
})();