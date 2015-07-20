import React from 'react';
import Cerebral from 'cerebral/decorator';
import List from './list.js';

@Cerebral(['inputValue', 'list'])
class App extends React.Component {
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.props.inputValue) {
      this.signals.Todo.form.onSubmit();
    }
  }
  changeInputValue(event) {
    this.signals.Todo.textInput.onChange(event.target.value);
  }
  popItem() {
    this.signals.Todo.popButton.onClick();
  }
  shiftItem() {
    this.signals.Todo.shiftButton.onClick();
  }
  removeItem() {
    this.signals.Todo.removeItemButton.onClick();
  }

  hasSelectedItem() {
    var has_selected = this.props.list.filter(function(item) {
      return item.isSelected;
    });
    if (has_selected.length > 0) {
      return 'enabled';
    } else {
      return 'disabled';
    }
  }

  hasItems() {
    if (this.props.list.length > 0) {
      return 'enabled';
    } else {
      return 'disabled';
    }
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
          <button type="submit">add new item</button>
        </form>

        <hr />

        <button onClick={this.removeItem.bind(this)} className={this.hasSelectedItem()}>remove selected</button>
        <button onClick={this.shiftItem.bind(this)} className={this.hasItems()}>shift (remove first)</button>
        <button onClick={this.popItem.bind(this)} className={this.hasItems()}>pop (remove last)</button>

        <hr />

        <List data={this.props.list} />
      </div>
    );
  }
}

export default App;
