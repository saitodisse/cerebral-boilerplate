let getSelectedItems = function (args, state) {

  var all_list = state.get('list');

  var selected_item_indexes = [];
  for(let i = 0; i < all_list.length; i++) {
  let item = all_list[i];
    if (item.isSelected) {
      selected_item_indexes.push(i);
    }
  }

  return selected_item_indexes;
};

export default getSelectedItems;
