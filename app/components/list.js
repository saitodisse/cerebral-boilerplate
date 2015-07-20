import React from 'react';
import StateComponent from './../StateComponent.js';
import Item from './item.js';

class List extends StateComponent {
  renderListItem(item) {
    return (
      <Item key={item.id} data={item} />
    );
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.data.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default List;
