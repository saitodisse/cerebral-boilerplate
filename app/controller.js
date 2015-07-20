import Store from 'immutable-store';
import {Controller, Value} from 'cerebral';
import events from './events.js';

const initialState =  Store({
  inputValue: '',
  selectedId: null,
  list: [{
    id: 'item_1',
    text: 'item_1',
    isSelected: false
  },
  {
    id: 'item_2',
    text: 'item_2',
    isSelected: false
  },
  {
    id: 'item_3',
    text: 'item_3',
    isSelected: false
  }]
});

let state = initialState;

export default Controller({
  onReset: function () {
    state = initialState;
  },
  onSeek: function (seek, isPlaying, currentRecording) {
    state = state.import(currentRecording.initialState);
    events.emit('change', state);
  },
  onUpdate: function () {
    events.emit('change', state);
  },
  onGet: function (path) {
    return Value(path, state);
  },
  onSet: function (path, value) {
    const key = path.pop();
    state = Value(path, state).set(key, value);
  },
  onUnset: function (path, key) {
    console.log(arguments);
    state = Value(path, state).unset(key);
  },
  onPush: function (path, value) {
    state = Value(path, state).push(value);
  },
  onSplice: function () {
    let args = [].slice.call(arguments);
    const value = Value(args.shift(), state);
    state = value.splice.apply(value, args);
  },
  onMerge: function (path, value) {
    state = Value(path, state).merge(value);
  }
});
