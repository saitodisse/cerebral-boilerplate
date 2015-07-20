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
  cloneItem() {
    this.signals.Todo.cloneItemButton.onClick();
  }

  hasSelectedItem() {
    var has_selected = this.props.list.filter(function(item) {
      return item.isSelected;
    });
    if (has_selected.length > 0) {
      return 'btn btn-default enabled';
    } else {
      return 'btn btn-default disabled';
    }
  }

  hasItems() {
    if (this.props.list.length > 0) {
      return 'btn btn-default enabled';
    } else {
      return 'btn btn-default disabled';
    }
  }

  render() {
    return (
      <div>
        <h1>cerebral list example</h1>

        <hr />

        <form
          className="form-horizontal"
          onSubmit={this.onInputValueSubmit.bind(this)}>

         <div className="form-group">
            <div className="col-sm-10">
              <label for="itemText">New Item:</label>
              <input
                id="itemText"
                className="form-control"
                type="text"
                value={this.props.inputValue}
                onChange={this.changeInputValue.bind(this)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-10">
              <button className="btn btn-default" type="submit">add new item</button>
            </div>
          </div>

        </form>

        <hr />

        <button onClick={this.removeItem.bind(this)} className={this.hasSelectedItem()}>remove selected</button>
        <button onClick={this.cloneItem.bind(this)} className={this.hasSelectedItem()}>clone selected</button>
        <button onClick={this.shiftItem.bind(this)} className={this.hasItems()}>shift (remove first)</button>
        <button onClick={this.popItem.bind(this)} className={this.hasItems()}>pop (remove last)</button>

        <hr />

        <List data={this.props.list} />
      </div>
    );
  }
}

export default App;
