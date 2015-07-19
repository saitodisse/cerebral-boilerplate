import './main.css';
import React from 'react';
import cerebral from './cerebral.js';
import App from './components/App.js';

import setInputValue from './actions/setInputValue.js';
import addItem       from './actions/addItem.js';
import removeItem    from './actions/removeItem.js';

cerebral.signal('inputValueChanged', setInputValue);
cerebral.signal('inputValueSubmitted', addItem);
cerebral.signal('removeButtonClicked', removeItem);

let Wrapper = cerebral.injectInto(App);

React.render(<Wrapper/>, document.querySelector('#app'));
