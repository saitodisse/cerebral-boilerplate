import React from 'react';
import StateComponent from './../StateComponent.js';

class Item extends StateComponent {
  getStatePaths() {
    return {
      selectedId: ['selectedId']
    };
  }
  selectItem(event) {
    event.preventDefault();
    event.stopPropagation();
    this.signals['Todo.listItem.onClick'](
      this.props.data,
      event.ctrlKey,
      event.shiftKey
    );
  }
  checkSelected() {
    if (this.props.data.isSelected) {
      return 'list-group-item pointer-mouse selectedItem';
    } else {
      return 'list-group-item pointer-mouse';
    }
  }
  render() {
    return (
      <li onClick={this.selectItem.bind(this)} className={this.checkSelected()}>
        <span className="badge">{this.props.data.id}</span>
        {this.props.data.text}
      </li>
    );
  }
}

export default Item;
