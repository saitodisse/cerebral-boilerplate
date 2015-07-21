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
      return false;
    } else {
      return true;
    }
  }

  hasItems() {
    if (this.props.list.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <h2>cerebral 0.9.0 list example</h2>
        <span>
          This is a deprecated use of <a href="https://github.com/christianalfoni/cerebral">cerebral 0.9.0</a>.
          <br/>
          Do some changes bellow and see that all history is been recorded.
          <br/>
          - <i>note: on the right side bar, enable "keep signals" but keep "store" disabled.</i>
        </span>

        <hr />

        <h4>New item</h4>

        <form
          className="form-horizontal"
          onSubmit={this.onInputValueSubmit.bind(this)}>

         <div className="form-group">
            <div className="col-sm-10">
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

        <h4>Actions</h4>

        <button
          onClick={this.removeItem.bind(this)}
          disabled={this.hasSelectedItem()}
          className="btn btn-default">

          remove selected</button>

        <button
          onClick={this.cloneItem.bind(this)}
          disabled={this.hasSelectedItem()}
          className="btn btn-default">
          clone selected</button>

        <button
          onClick={this.shiftItem.bind(this)}
          disabled={this.hasItems()}
          className="btn btn-default">
          shift (remove first)</button>

        <button
          onClick={this.popItem.bind(this)}
          disabled={this.hasItems()}
          className="btn btn-default">
          pop (remove last)</button>


        <hr />

        <h4>All items</h4>

        <List data={this.props.list} />
      </div>
    );
  }
}

export default App;
