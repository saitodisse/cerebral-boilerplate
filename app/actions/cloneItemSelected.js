import createNewtodo from './utils/createNewTodo.js';

let cloneItemSelected = function (cerebral) {
  var all_list = cerebral.get('list');

  var selected_item_id;
  for(let i = 0; i < all_list.length; i++) {
	let item = all_list[i];
    if (item.isSelected) {
      selected_item_id = i;
      break;
    }
  }
  if (typeof selected_item_id === 'undefined') {
    return;
  }
  let selected_item = all_list[selected_item_id];

  let item = createNewtodo(cerebral, selected_item.text);

  cerebral.push('list', item);
};

export default cloneItemSelected;
