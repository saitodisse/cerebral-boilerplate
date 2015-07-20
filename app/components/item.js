import React from 'react';
import Cerebral from 'cerebral/decorator';

@Cerebral(['selectedId'])
class Item extends React.Component {
  selectItem(event) {
    event.preventDefault();
    this.signals.Todo.listItem.onClick(this.props.data);
  }
  checkSelected() {
    if (this.props.data.isSelected) {
      return 'selectedItem';
    }
  }
  render() {
    return (
      <li className={this.checkSelected()}>
        <a href="#" onClick={this.selectItem.bind(this)}>
          {this.props.data.text}
        </a>
      </li>
    );
  }
}

export default Item;
