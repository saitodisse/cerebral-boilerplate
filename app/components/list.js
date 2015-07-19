import React from 'react';
import Cerebral from 'cerebral/decorator';
import Item from './item.js';

@Cerebral(['selectedId'])
class List extends React.Component {
  renderListItem(item) {
    return (
      <Item id={item.id} text={item.text} />
    );
  }
  render() {
    return (
      <div>
        selectedId: {this.props.selectedId}
        <ul>
          {this.props.data.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}

export default List;
