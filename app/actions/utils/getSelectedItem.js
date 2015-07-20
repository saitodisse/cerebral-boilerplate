import getSelectedItemIndex from './getSelectedItemIndex.js';

let getSelectedItem = function (cerebral) {
  let selected_item_index = getSelectedItemIndex(cerebral);
  var all_list = cerebral.get('list');
  return all_list[selected_item_index];
};

export default getSelectedItem;
