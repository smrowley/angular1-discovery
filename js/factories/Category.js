(function() {
	angular.module('kiwi').factory('Category', function($http, $log) {
		return {
			categories: [
				{
					id: 1,
					name: 'Test Category',
					masterCategoryId: 1
				},
				{
					id: 2,
					name: 'Category 2',
					masterCategoryId: 2
				}],
			masterCategories: [
				{
					id: 1,
					name: 'Master 1'
				},
				{
					id: 2,
					name: 'Master 2'
				}
			],
			getCategory: function(categoryId) {
				for (var i in this.categories) {
					if (this.categories[i].id == categoryId) {
						return this.categories[i];
					}
				}
			},
			getMasterCategory: function(masterCategoryId) {
				for (var i in this.masterCategories) {
					if (this.masterCategories[i].id == masterCategoryId) {
						return this.masterCategories[i];
					}
				}
			},
			getFrequentCategories: function(categoryIds) {
				var frequent = [];

				for (var i in this.categories) {
					for (var j in categoryIds) {
						if (this.categories[i].id == categoryIds[j]) {
							frequent.push(this.categories[i]);
							categoryIds.remove(j);

							break;
						}
					}

					if (categoryIds.length == 0) {
						return frequent;
					}
				}

				return frequent;
			},
			getTypeAheadCategories: function(input) {

			},
			getCategoryString: function(categoryId) {
				var category = this.getCategory(categoryId);
				var masterCategory = this.getMasterCategory(category.masterCategoryId);

				return masterCategory.name + ": " + category.name;
			}
		};
	});
})();