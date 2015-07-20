import createNewItem from './utils/createNewItem.js';
import getSelectedItems from './utils/getSelectedItems.js';

let cloneItemSelected = function (cerebral) {
  var selected_items = getSelectedItems(cerebral);

  selected_items.map(function(sel_item) {
  	let item = createNewItem(cerebral, sel_item.text);
  	cerebral.push('list', item);
  });

};

export default cloneItemSelected;
