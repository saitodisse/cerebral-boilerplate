let removeItem = function (cerebral) {
	var selectedId = cerebral.get('selectedId');
	var list = cerebral.get('list');

	// remove selected item
	var newList = list.filter(function(item) {
		if (item.id !== selectedId) {
			return item;
		}
	});

	cerebral.set('list', newList);
};

export default removeItem;
