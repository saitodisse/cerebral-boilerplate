import createNewItem from './utils/createNewItem.js';
import getSelectedItems from './utils/getSelectedItems.js';

let cloneItemSelected = function (args, state) {
  var selected_items = getSelectedItems(state);

  selected_items.map(function(sel_item) {
  	let item = createNewItem(state, sel_item.text);
  	state.push('list', item);
  });

};

export default cloneItemSelected;
