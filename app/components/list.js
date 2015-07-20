import React from 'react';
import Cerebral from 'cerebral/decorator';
import Item from './item.js';

@Cerebral(['selectedId'])
class List extends React.Component {
  renderListItem(item) {
    return (
      <Item key={item.id} data={item} />
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default List;
