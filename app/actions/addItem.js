function getRandomId() {
	var uniqid = 'item_' + Date.now();
	return uniqid;
}

let addItem = function (cerebral) {

  let item = {
    id: getRandomId(),
    text: cerebral.get('inputValue')
  };

  cerebral.push('list', item);
  cerebral.set('inputValue', '');
};

export default addItem;
