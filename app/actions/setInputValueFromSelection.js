function getItemId(cerebral) {
	var list_length = cerebral.get('list').length;
	var uniqid = 'item_' + Number(list_length + 1);
	return uniqid;
}

let setInputValueFromSelection = function (cerebral) {

  var all_list = cerebral.get('list');
  var selected_item_id;

  for(let i = 0; i < all_list.length; i++) {
    let item = all_list[i];
    if (item.isSelected) {
      selected_item_id = i;
      break;
    }
  }

  if (typeof selected_item_id === 'undefined') {
    return;
  }

  cerebral.set('inputValue', all_list[selected_item_id].text);
};

export default setInputValueFromSelection;
