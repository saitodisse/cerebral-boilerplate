import RegexHelper from './RegexHelper.js';

function getItemId(cerebral) {
  // get max todo id
  var list = cerebral.get('list');

  var max = list.reduce(function(prev, item) {
    var id_index = RegexHelper.groupFromRegex(item.id, /item_(\d+)/g, 1);
    id_index = parseInt(id_index);
    if (id_index > prev) {
      return id_index;
    }
  }, 0);

  var uniqid = 'item_' + Number(max + 1);
  return uniqid;
}

let createNewItem = function (cerebral, text) {

  let item = {
    id: getItemId(cerebral),
    text: text,
    isSelected: false
  };

  return item;

};

export default createNewItem;
