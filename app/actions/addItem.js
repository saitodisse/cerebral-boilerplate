function getRandomId(cerebral) {
	var list_length = cerebral.get('list').length;
	var uniqid = 'item_' + Number(list_length + 1);
	return uniqid;
}

let addItem = function (cerebral) {

  let item = {
    id: getRandomId(cerebral),
    text: cerebral.get('inputValue'),
    isSelected: false
  };

  cerebral.push('list', item);
  cerebral.set('inputValue', '');
};

export default addItem;
