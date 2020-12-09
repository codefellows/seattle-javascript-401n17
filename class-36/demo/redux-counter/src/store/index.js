import {createStore, combineReducers} from 'redux';

import counterReducer from './counter.js';

const reducers = combineReducers({
  counter: counterReducer,
});

export default createStore(reducers);
