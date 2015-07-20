import Cerebral from 'cerebral';

let cerebral = Cerebral({
  inputValue: '',
  selectedId: null,
  list: [{
    id: 'item_1',
    text: 'item_1',
    isSelected: false
  },
  {
    id: 'item_2',
    text: 'item_2',
    isSelected: false
  },
  {
    id: 'item_3',
    text: 'item_3',
    isSelected: false
  }]
});

export default cerebral;
