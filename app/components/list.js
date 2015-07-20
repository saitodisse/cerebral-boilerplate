import React from 'react';
import Cerebral from 'cerebral/decorator';
import Item from './item.js';

@Cerebral(['selectedId'])
class List extends React.Component {
  renderListItem(item) {
    console.log('\n>>---------\n item.id:', item.id, '\n>>---------\n');
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
