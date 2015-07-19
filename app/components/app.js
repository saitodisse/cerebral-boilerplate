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

export default App;
