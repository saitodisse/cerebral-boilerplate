import getSelectedItemIndexes from './getSelectedItemIndexes.js';

let getSelectedItems = function (args, state) {
  let selected_item_indexes = getSelectedItemIndexes(state);
  var all_list = state.get('list');

  var selectedList = [];

  selected_item_indexes.forEach(function(index) {
  	selectedList.push(all_list[index]);
  });

  return selectedList;
};

export default getSelectedItems;
