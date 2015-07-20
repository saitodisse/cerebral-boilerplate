import createNewtodo from './utils/createNewTodo.js';

let addItem = function (cerebral) {

  let item = createNewtodo(cerebral, cerebral.get('inputValue'));

  cerebral.push('list', item);
  cerebral.set('inputValue', '');
};

export default addItem;
