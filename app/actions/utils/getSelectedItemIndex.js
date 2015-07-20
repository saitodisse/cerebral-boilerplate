let getSelectedItem = function (cerebral) {

  var all_list = cerebral.get('list');

  var selected_item_index;
  for(let i = 0; i < all_list.length; i++) {
  let item = all_list[i];
    if (item.isSelected) {
      selected_item_index = i;
      break;
    }
  }
  if (typeof selected_item_index === 'undefined') {
    return null;
  }

  return selected_item_index;
};

export default getSelectedItem;
