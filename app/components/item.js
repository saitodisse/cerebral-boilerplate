import React from 'react';
import Cerebral from 'cerebral/decorator';

@Cerebral(['selectedId'])
class Item extends React.Component {
  selectItem() {
    this.signals.Todo.selectButton.onClick(this.props.data);
  }
  checkSelected() {
    if (this.props.data.isSelected) {
      return 'selectedItem';
    }
  }
  render() {
    return (
      <li className={this.checkSelected()}>
        {this.props.data.text}
        <button onClick={this.selectItem.bind(this)}>sel</button>
      </li>
    );
  }
}

export default Item;
