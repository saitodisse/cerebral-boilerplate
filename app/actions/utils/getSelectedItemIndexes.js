let getSelectedItems = function (cerebral) {

  var all_list = cerebral.get('list');

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
