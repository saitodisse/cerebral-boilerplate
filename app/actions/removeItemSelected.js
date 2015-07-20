let shiftItem = function (cerebral) {
  var all_list = cerebral.get('list');
  var last_id = all_list.length - 1;
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

  // exit if there are no more items
  all_list = cerebral.get('list');
  if (all_list.length === 0) {
    return;
  }

  // if was the last, will select previous
  if (selected_item_id === last_id) {
    cerebral.set([all_list[selected_item_id - 1], 'isSelected'], true);
  } else {
    cerebral.set([all_list[selected_item_id], 'isSelected'], true);
  }

};

export default shiftItem;
