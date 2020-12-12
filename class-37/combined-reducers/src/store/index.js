import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import candidateReducer from './candidates-reducer.js';
import votersReducer from './voters-reducer.js';

const reducers = combineReducers({
  candidates: candidateReducer,
  voters: votersReducer,
});

const store = () => {
  return createStore( reducers, composeWithDevTools() );
}

export default store();

/*
export default createStore(reducers);
*/

