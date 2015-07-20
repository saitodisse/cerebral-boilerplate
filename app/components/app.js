import React from 'react';
import StateComponent from './../StateComponent.js';
import List from './list.js';

class App extends StateComponent {
  getStatePaths() {
    return {
      inputValue: ['inputValue'],
      list: ['list']
    };
  }
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.state.inputValue) {
      this.signals['Todo.form.onSubmit']();
    }
  }
  changeInputValue(event) {
    this.signals['Todo.textInput.onChange'](event.target.value);
  }
  popItem() {
    this.signals['Todo.popButton.onClick']();
  }
  shiftItem() {
    this.signals['Todo.shiftButton.onClick']();
  }
  removeItem() {
    this.signals['Todo.removeItemButton.onClick']();
  }
  cloneItem() {
    this.signals['Todo.cloneItemButton.onClick']();
  }

  hasSelectedItem() {
    var has_selected = this.state.list.filter(function(item) {
      return item.isSelected;
    });
    if (has_selected.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  hasItems() {
    if (this.state.list.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  record() {
    this.recorder.record(this.context.controller.get([]).export());
  }
  stop() {
    this.recorder.stop();
  }
  play() {
    this.recorder.seek(0, true);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.recorder.isRecording() ?
            <button className="btn btn-stop" onClick={this.stop.bind(this)}>Stop</button> :
            null
          }
          {
            this.recorder.isPlaying() ?
            <button className="btn btn-play" disabled>Play</button> :
            null
          }
          {
            !this.recorder.isRecording() && !this.recorder.isPlaying() && this.recorder.getRecording() ?
            <button className="btn btn-play" onClick={this.play.bind(this)}>Play</button> :
            null
          }
          {
            !this.recorder.isRecording() && !this.recorder.isPlaying() && !this.recorder.getRecording() ?
            <button className="btn btn-record" onClick={this.record.bind(this)}>Record</button> :
            null
          }
        </div>

        <h2>cerebral list example</h2>

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
                value={this.state.inputValue}
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

        <List data={this.state.list} />
      </div>
    );
  }
}

export default App;
