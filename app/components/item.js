import React from 'react';
import Cerebral from 'cerebral/decorator';

@Cerebral(['selectedId'])
class Item extends React.Component {
  selectItem() {
    this.signals.Todo.selectButton.onClick(this.props.id);
  }
  removeItem() {
    this.signals.Todo.removeButton.onClick(this.props.id);
  }
  checkSelected() {
    if (this.props.selectedId === this.props.id) {
      return 'selectedItem';
    }
  }
  render() {
    return (
      <li key={this.props.id} className={this.checkSelected()}>
        {this.props.text}
        <button onClick={this.selectItem.bind(this)}>sel</button>
        <button onClick={this.removeItem.bind(this)}>del</button>
      </li>
    );
  }
}

export default Item;
