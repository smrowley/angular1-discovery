(function() {
	angular.module('kiwi').factory('Tag', function($http, $log) {
		return {
			tags: [
			{
				id: 1,
				name: '#heyhey'
			},
			{
				id: 2,
				name: '#saywhat'
			}
			],
			getTag: function(tagId) {
				for (var i in this.tags) {
					if (this.tags[i].id == tagId) {
						return this.tags[i];
					}
				}
			}
		};
	});
})();