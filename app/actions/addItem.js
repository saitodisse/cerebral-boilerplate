import createNewItem from './utils/createNewItem.js';

let addItem = function (args, state) {

  let item = createNewItem(state, state.get('inputValue'));

  state.push('list', item);
  state.set('inputValue', '');
};

export default addItem;
