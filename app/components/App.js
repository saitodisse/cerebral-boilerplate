import React from 'react';
import Cerebral from 'cerebral/decorator';

@Cerebral(['inputValue', 'list'])
class App extends React.Component {
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.props.inputValue) {
      this.signals.inputValueSubmitted();
    }
  }
  changeInputValue(event) {
    this.signals.inputValueChanged(event.target.value);
  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <form onSubmit={this.onInputValueSubmit.bind(this)}>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.changeInputValue.bind(this)}
          />
          <button type="submit">add</button>
        </form>
        <List data={this.props.list} />
      </div>
    );
  }
}

class List extends React.Component {
  renderListItem(item, index) {
    return (
      <Item data={item} />
    );
  }
  render() {
    return (
      <ul>
        {this.props.data.map(this.renderListItem)}
      </ul>
    );
  }
}

class Item extends React.Component {
  removeItem() {
    var item_id = this.props.data.id;
    console.log('\n>>---------\n item_id:', item_id, '\n>>---------\n');
  }
  render() {
    return (
      <li key={this.props.data.id}>
        {this.props.data.text}
        <button onClick={this.removeItem.bind(this)}>del</button>
      </li>
    );
  }
}

export default App;