import './main.css';
import React from 'react';
import cerebral from './cerebral.js';
import App from './components/app.js';

import setInputValue from './actions/setInputValue.js';
import addItem from './actions/addItem.js';
import selectItem from './actions/selectItem.js';
import popItem from './actions/popItem.js';
import shiftItem from './actions/shiftItem.js';
import removeItemSelected from './actions/removeItemSelected.js';
import cloneItemSelected from './actions/cloneItemSelected.js';

cerebral.signal('Todo.textInput.onChange', setInputValue);
cerebral.signal('Todo.form.onSubmit', addItem);
cerebral.signal('Todo.listItem.onClick', selectItem);

cerebral.signal('Todo.popButton.onClick', popItem);
cerebral.signal('Todo.shiftButton.onClick', shiftItem);
cerebral.signal('Todo.removeItemButton.onClick', removeItemSelected);
cerebral.signal('Todo.cloneItemButton.onClick', cloneItemSelected);

let Wrapper = cerebral.injectInto(App);

React.render(<Wrapper/>, document.querySelector('#app'));
