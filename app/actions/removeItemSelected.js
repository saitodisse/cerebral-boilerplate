let shiftItem = function (cerebral) {
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

  cerebral.splice(['list'], selected_item_id, 1);
};

export default shiftItem;
