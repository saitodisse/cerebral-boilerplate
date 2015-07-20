let selectItem = function (cerebral, data) {
  let list = cerebral.get('list');

  return list.map(function(item) {
    if(item.id === data.id) {
      if (cerebral.get([item, 'isSelected']) === false) {
        cerebral.set([item, 'isSelected'], true);
      }
    } else {
      if (cerebral.get([item, 'isSelected']) === true) {
        cerebral.set([item, 'isSelected'], false);
      }
    }
    return item;
  });

};

export default selectItem;
