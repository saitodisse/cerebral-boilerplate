import getSelectedItemIndexes from './utils/getSelectedItemIndexes.js';
var R = require('ramda');

let removeItemSelected = function (args, state) {
  var all_list = state.get('list');
  var last_id = all_list.length - 1;
  var selected_item_indexes = getSelectedItemIndexes(state);

  if (selected_item_indexes.length > 0) {

    // sort by index, reversed
    var diff = function(a, b) { return b - a; };
    var reversed_indexes = R.sort(diff, selected_item_indexes);

    // remove each
    reversed_indexes.forEach(function(index) {
      state.splice(['list'], index, 1);
    });
  }

  // exit if there are no more items
  all_list = state.get('list');
  if (all_list.length === 0) {
    return;
  }

  // select next item (one item only)
  if (selected_item_indexes.length === 1) {
    // if was the last, will select previous
    if (selected_item_indexes === last_id) {
      state.set([all_list[selected_item_indexes - 1], 'isSelected'], true);
    } else {
      state.set([all_list[selected_item_indexes], 'isSelected'], true);
    }
  }

};

export default removeItemSelected;
