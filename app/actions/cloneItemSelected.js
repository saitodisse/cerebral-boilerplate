import createNewItem from './utils/createNewItem.js';
import getSelectedItem from './utils/getSelectedItem.js';

let cloneItemSelected = function (cerebral) {
  var selected_item = getSelectedItem(cerebral);
  let item = createNewItem(cerebral, selected_item.text);
  cerebral.push('list', item);
};

export default cloneItemSelected;
