import getSelectedItem from './utils/getSelectedItem.js';

let setInputValueFromSelection = function (cerebral) {
  var selected_item = getSelectedItem(cerebral);
  cerebral.set('inputValue', selected_item.text);
};

export default setInputValueFromSelection;
