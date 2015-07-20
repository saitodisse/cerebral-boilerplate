import createNewItem from './utils/createNewItem.js';

let addItem = function (cerebral) {

  let item = createNewItem(cerebral, cerebral.get('inputValue'));

  cerebral.push('list', item);
  cerebral.set('inputValue', '');
};

export default addItem;
