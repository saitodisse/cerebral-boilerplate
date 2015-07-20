import './main.css';
import React from 'react';
import App from './components/app.js';
import controller from './controller.js';

import setInputValue from './actions/setInputValue.js';
import addItem from './actions/addItem.js';
import selectItem from './actions/selectItem.js';
import popItem from './actions/popItem.js';
import shiftItem from './actions/shiftItem.js';
import removeItemSelected from './actions/removeItemSelected.js';
import cloneItemSelected from './actions/cloneItemSelected.js';

controller.signal('Todo.textInput.onChange', setInputValue);
controller.signal('Todo.form.onSubmit', addItem);
controller.signal('Todo.listItem.onClick', selectItem);

controller.signal('Todo.popButton.onClick', popItem);
controller.signal('Todo.shiftButton.onClick', shiftItem);
controller.signal('Todo.removeItemButton.onClick', removeItemSelected);
controller.signal('Todo.cloneItemButton.onClick', cloneItemSelected);

// RENDER
const Wrapper = React.createClass({
  childContextTypes: {
    controller: React.PropTypes.object
  },
  getChildContext() {
    return {
      controller: controller
    }
  },
  render() {
    return <App/>;
  }
});
React.render(<Wrapper/>, document.querySelector('#app'));
