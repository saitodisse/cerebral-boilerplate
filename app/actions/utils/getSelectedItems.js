import getSelectedItemIndexes from './getSelectedItemIndexes.js';

let getSelectedItems = function (cerebral) {
  let selected_item_indexes = getSelectedItemIndexes(cerebral);
  var all_list = cerebral.get('list');

  var selectedList = [];

  selected_item_indexes.forEach(function(index) {
  	selectedList.push(all_list[index]);
  });

  return selectedList;
};

export default getSelectedItems;
