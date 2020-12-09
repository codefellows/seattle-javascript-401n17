# Application State with Redux

Managing global state at the application level can definitely be a challenge. While the Context API provides a mechanism to accomplish this very tactically, Redux is a library that specializes in sharing state between components using a global "Store"

## Learning Objectives

### Students will be able to

#### Describe and Define

- Redux (10,000' view)
- Global state management with a Redux Store (conceptually)
- The elements that make up a "store"
- The basic wiring (boilerplate) of Redux
- The roles of Actions and Reducers
- How the process of "Dispatching an Action" results in an update of the UI

#### Execute

- Implement the core Redux boilerplate code required to participate in a store-based state managed application

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

Managing state with Redux requires the combination of 3 distinct aspects into a "Store" which all components can access as they please.

- State
- Reducers (strategies to alter state)
- Actions (methods that get "dispatched" or "run", which trigger associated reducers)

### Redux Store

Ultimately, the "store" is where your application state is, well, stored.  The store's job is to identify the various reducers, actions, state, and middleware that need to be made available and used globally.

### Reducers

React uses "reducers" to hold and manage state. Reducers typically manage just one part of the larger application state.  For example, in a storefront application, you would likely have a separate reducer for Products, Categories, and Carts

Here's a sample reducer for a counter. As you can see it creates an initial "empty" state, and then identifies what todo when a certain action (e.g. INCREMENT) is called. Reducers always "Hear" that an action was dispatched, and use whatever "payload" they receive to do their work.

> A reducer function always **receives the current state** and then **returns the next state**

```javascript
let initialState = { count: 0 }

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1 }

    case 'DECREMENT':
      return {...state, count: state.count - 1 }

    case 'INITIALIZE':
      return {...state, count: payload}

    default:
      return state;
  }
};
```

### Actions

React applications with Redux **dispatch "actions" to tell redux to change the state. This works like an event with "payload" (data). An action creator function as shown below always returns an action object with the action type to perform and the data to perform it with.  When your component wants to modify state, it "Dispatches" (calls) an action and sends whatever payload (data) it needs to, to the reducer.

When an action is dispatched, a reducer responds to it, and receives that payload, where it then operates on state using it.

```javascript
// actions.js
const initializeCounter = (startValue) => {
  return {
    type: 'INCREMENT',
    payload: startValue,
  };
};

```

### Create a Redux "store" to hold your reducers and actions

We use a store to "bring it all together" ... in the store, you declare what middleware you may need and the reducers that you'll use to manage your state data

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterrReducer from './reducers/counter.js';

let reducers = combineReducers({
  counter: counterReducer,
});

export default createStore(reducers);
```

### Connect your app to the Redux store

Before any of this can work, your entire application needs to be given access to the store. Your component (above) uses the redux `connect()` method to attach to the store, but without first "Providing" it to your application, that connection will fail.  The provider wrapper is a means that React uses to allow child components to have access to higher level context.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.scss';

import App from './components/app';

import createStore from './store';
const store = createStore();

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
```

### Connecting Class Components

Class Based Components subscribe to the store and get to use actions with a bit of boilerplate code ...

In this example, when the 'Add' buttons are clicked, they runs a method called `this.props.increment()/decrement()`.

This method is declared in the `mapDispatchToProps` function as a pointer to the `newCart()` method in the actions file.

When you do this, you get to use `this.props.increment` as a method. That's what the mapper does for you, along with mapping the reducers's state to `this.props` with the key that you specified.

```javascript
import React from 'react';
import { connect } from 'react-redux';

// Get the action creators
import * as actions from '../store/actions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.counter.count}</h1>
        <button onClick={this.props.increment}>Add 1</button>
        <button onClick={this.props.decrement}>Remove 1</button>
      </>
    );
  }
}

// the key in this object is given to your component in "props"
const mapStateToProps = state => ({
  counter: state.counter,
});

// the keys in this object are given to your component in "props"
const mapDispatchToProps = (dispatch, getState) => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
});

// This snippet "Connects" your component to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

```

### Connecting Function Components

Function components can take advantage of Hooks to easily reach into the store and gain access to any part of state, using **selectors** as well as the actions

```javascript
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../store/counter';

function Counter(props) {

  // These 2 lines replace all of the mapStateToProps and mapDispatchToProps an the Connect()
  // Boilerplate that class components require. With these redux hooks, your code
  // is far more readable and declarative.
  const dispatch = useDispatch();
  const count = useSelector( state => state.counter.count )

  // These functions simply dispatch the correct actions.
  // We could have easily had them refernced directly in the click handlers
  // But this gives us an opportunity to do other work before we dispatch, if we need to
  const add = () => {
    dispatch(actions.increment());
  }

  const minus = () => {
    dispatch(actions.decrement());
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={minus}>Minus 1</button>
      <button onClick={add}>Add 1</button>
    </>
  )

}

export default Counter;

```
