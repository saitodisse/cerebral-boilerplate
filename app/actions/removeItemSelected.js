import getSelectedItemIndex from './utils/getSelectedItemIndex.js';

let shiftItem = function (cerebral) {
  var all_list = cerebral.get('list');
  var last_id = all_list.length - 1;
  var selected_item_index = getSelectedItemIndex(cerebral);

  cerebral.splice(['list'], selected_item_index, 1);

  // exit if there are no more items
  all_list = cerebral.get('list');
  if (all_list.length === 0) {
    return;
  }

  // if was the last, will select previous
  if (selected_item_index === last_id) {
    cerebral.set([all_list[selected_item_index - 1], 'isSelected'], true);
  } else {
    cerebral.set([all_list[selected_item_index], 'isSelected'], true);
  }

};

export default shiftItem;
