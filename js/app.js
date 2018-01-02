(function() {
	angular.module('kiwi', ['ng-sortable', 'xeditable', 'ui.bootstrap']);

	angular.module('kiwi').run(function(editableOptions) {
		editableOptions.buttons = 'no';
	});
})();