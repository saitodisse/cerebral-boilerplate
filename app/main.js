import './main.css';
import React from 'react';
import cerebral from './cerebral.js';
import App from './components/app.js';

import setInputValue from './actions/setInputValue.js';
import addItem from './actions/addItem.js';
import removeItem from './actions/removeItem.js';
import selectItem from './actions/selectItem.js';

cerebral.signal('Todo.textInput.onChange', setInputValue);
cerebral.signal('Todo.form.onSubmit', addItem);
cerebral.signal('Todo.selectButton.onClick', selectItem);
cerebral.signal('Todo.removeButton.onClick', selectItem, removeItem);

let Wrapper = cerebral.injectInto(App);

React.render(<Wrapper/>, document.querySelector('#app'));
