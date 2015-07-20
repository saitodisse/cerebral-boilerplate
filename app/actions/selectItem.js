let selectItem = function (cerebral, data, ctrlKey, shiftKey) {
  let list = cerebral.get('list');

  if (shiftKey) {
    // TODO: use shift key
    // save last selected item
    // select all on interval
    // if ctrl is pressed too, them preserve last selection
  }

  return list.map(function(item) {
    var is_current_item = item.id === data.id;

    if (is_current_item) {
      var is_selected = cerebral.get([item, 'isSelected']) === true;
      var not_selected = cerebral.get([item, 'isSelected']) === false;

      if (not_selected) {
        // select clicked
        cerebral.set([item, 'isSelected'], true);
      } else if (is_selected && ctrlKey) {
        // unselect clicked
        cerebral.set([item, 'isSelected'], false);
      }

    } else if (!ctrlKey) {
        // unselect all others
        cerebral.set([item, 'isSelected'], false);
    }
    return item;
  });

};

export default selectItem;
