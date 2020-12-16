import {createStore, combineReducers, applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from './thunk.js'; // use redux-thunk, please

import todoReducer from './reducer.js';

let reducers = combineReducers({
  todo: todoReducer
});

// applyMiddleware(thunk) is kinda like app.use(thunk);
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
