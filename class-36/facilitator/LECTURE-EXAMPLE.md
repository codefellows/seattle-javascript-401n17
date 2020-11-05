# Lecture Guide: Application State with Redux

## TOPIC 1: Component Libraries - Material UI

- **Why** (5 min)
  - As with Bootstrap, Material is quick, easy, and employs best practices
  - Allows for some "tinkering" with CSS to override the defaults
  - Excellent for Proof of Concept work and quick implementations
  - Very industry standard (it's how most Android apps are built)
- **What** (10 min)
  - [Material UI](https://material-ui.com/)
  - Review the documentation with the class
    - Installation
    - [Layouts](https://material-ui.com/components/grid/)
    - [Theme/Styles](https://material-ui.com/styles/basics/)
    - [Examples](https://material-ui.com/getting-started/templates/) and [Commercial Themes](https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=templates-store)
    - Component Usage
      - Visual examples, with code to copy
        - Note that you almost never want "all" of the code in a sample. What's relevant to you right now?
      - Links down into the API if you need to get deeper
- **How** (15 min)
  - Interactive demo, building a simple application with a menu and a form using Material UI
  - You should continue to use Material in your demos during the rest of this module to cement it's potential usage

## TOPIC 2: Redux - Terminology and High Level Overview

- **Why** (5 min)
  - Global state is a real need
  - Not every application is built from components that solely manage their own state
  - They very often need to share state
  - We can pass it down through props
    - But this makes for a "God Component" that knows all. That's too big to manage and creates a single choke point
  - We can use context
    - But each "Context" is for one thing.  When you have many contexts, that's a lot of wrapping, lots of re-rendering, and again, a bit of a spaghetti pile to manage
    - And, there clearly a difference between simple application state and application context
      - Context is great for things like metadata, theme, settings, login state, etc
      - But how can we manage bigger data, like a list of todo items or all of the products in a store?
- **What** (10 min)
  - Redux is another way to manage global state.
  - As with Context, in Redux ...
    - State is globally "available"
    - Components that want state or functions can opt-in
  - Definitions:
    - Application state is called the "Store"
    - The store actually is more than simply state, though ...
      - The actual state data (an object)
      - The means to manipulate and retrieve state data (Reducer)
      - The hooks/triggers/functions to access state data (actions)
  - Redux was designed to be a common api for managing complex state
  - It lives atop your application, in what's called a "store"
    - The store contains both the state, and the means by which you can change state
  - Components can "opt in" to using the store
    - In fact, they can use all or just specific parts of the store
  - The store has 3 principle parts
    - **State**, which can be as simple or as complex as you need it to be
    - **Actions**, which are methods used to notify the store how you'd like to change state
      - Actions are effectively objects that carry a command (or "type" of action) and a payload (data)
    - **Reducers**, which respond to those notifications and carry out the task of actually changing state
  - The store manages your state changes and keeps a history of each change
- **How** (30 min)
  - The concept is simple enough, but the wiring can be a large process
  - Luckily, it's a lot of "boilerplate" so once you understand how to connect it all together, it becomes second nature.
  - First, create one or more `reducers` as modules
    - Declare an initial state
    - Return a function  that takes 2 parameters: initial state and the action to perform
      - Actions will always have a type and often some data as well
      - Based on the type of action, make an alteration to state, using the data given
        - Generally, this is done as a `switch-case`
      - Return the state as you want it to be transformed (but don't actually change it)
      - Notice that this follows the same pattern as `Array.reduce()` "state" is actually the accumulator
      - Reducers are "pure" functions in that they don't actually mutate state directly
  - Second, declare your actions.
    - Actions are an object with a "type" that matches a case in your reducer
    - Optionally, they can include data
    - Usually, we create actions as functions (action creators) that return action objects
  - Third, create a store that is assembled by collating your reducers
  - At the application level, wire in the store
    - Initialize it
    - Wrap your `<App>` in a Redux "provider" ... `<Provider store={store}>`
      - **This is Context** -- every component in the application can now "see" the store
      - Redux itself is actually built using Context and Hooks!
  - In any component ...
    - Import your actions
    - Map the state from the store so that you can access it as a `prop` in your component
    - Map the actions from the store so that you can access them as a `prop` in your component
    - Connect to the store
    - You can now use `props` to render your state
    - You can also "dispatch" actions so that the store can respond to them

## Code and Concept Lecture Notes

There's sample code here that shows YOU the concept and provides some ordering and wording around them.

You'll want to dive deep in here with the students.

It helps to present this information and then draw lines and arrows between the connected points of code.

It might even help to print out these samples and pass them out after you've presented it.

In the live coding session, asking the students to refer to your drawing or those printouts can be really impactful as they mentally connect the Redux Dots. Note that this code does not match the demo code, it's simply a simple set of examples to provide background information and talking points.

Following is a suggested order for introducing the Redux concept.

## State Management (Reducers)

A "Reducer" sets up the initial state and is exported as a function that receives 2 parameters:

- The current state (defaults to the initial state)
- An "action" that is an object containing 2 properties
  - type: The actual thing you want to do (see the switch statement)
  - payload: Relevant data. Could be ANYTHING or NOTHING

people.store.js

```javascript
  let initialState = {
    name: "",
    age: 0,
  }

  export default function reducer(state=initialState, action) {
     switch( action.type ) {
        case 'born':
          return {...state, name:action.payload}
        case 'birthday':
          return {...state, age:state.age+1}
        default:
          return state;
     }
  }

```

Were you call that reducer directly, it might look like this:

```javascript
action = {type: 'born', payload:'John'}
newState = reducer(initialState, action);
console.log(newState);
// { name: 'John', age: 0 }


action = {type:'birthday'}
newState = reducer(initialState, action);
console.log(newState);
// { name: '', age: 1 }

```

That ends up being essentially the same as using `Context` with a reducer hook.

## Actions

As shown an action is a way of telling the reducer what to do. In a component, we want to be able to call that reducer easily. To help us here, a common pattern is to have your store export functions that produce those action objects.

people.store.js

```javascript
  let initialState = {...}

  export default function reducer(state=initialState, action) { ... }

  export function beBorn(name) {
    return {
      type: "born",
      payload: name
    }
  }

  export function birthday() {
    return {
      type: "birthday"
    }
  }

```

## The Store

We need a bit of boilerplate to make it all happen.

First, Redux has us create a "store", which is basically a way to pull in that person-store that we created earlier and make it available to the app. The person store itself isn't enough on it's own, so we sprinkle it with some Redux wrappers.  This is a "set it and forget it" step

- Import the Redux dependencies
- Grab the person-store, which has the reducer and the actions.
  - Since we're importing it without the {}, all we get is the reducer, which was the default export.
- Create a reducers object with `combineReducers` (this is basically a way to name them)
- Export a function that will run the redux `createStore()` method with your reducer

store.js

```javascript
  import { createStore, combineReducers, applyMiddleware } from 'redux';

  import peopleReducer from "./person-store.js";

  let reducers = combineReducers({
    person: peopleReducer,
  });

  export default () => createStore(reducers);
```

We now have a "person store" which is our state and action creators, and a global Store that gives that a name and exports it. Import that into your app and "provide" the global store.  Notice that this is just like context in the way we "wrap" our application in it

- Require the store
- Instantiate it
- `<Provide>` it

app.js

```javascript
import React from 'react';
import { Provider } from 'react-redux';

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

```

The act of "Providing" a store gives any component the ability to pull it in if it wants. **this is context!** Lets look at the component we tried to create earlier and make it work.

- Import the Redux Connector
- Import our person store. Specifically those methods we created
- Map the person store's state and the actions using the `map` functions at the bottom.
- Export a connected version of our component instead of the raw component
- We can now reference those actions and the state using `props.function` and `props.state.property`

my-component.js

```javascript
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/person-actions.js';

class Person extends React.Component {
  render() {
    return (
      <section>
        <div>{this.props.person.name}</div>
        <button onClick={() => this.props.beBorn('John')}>Create John</button>
        <button onClick={this.props.birthday}>Age John</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch, getState) => ({
  beBorn: name => dispatch(actions.beBorn(name)),
  birthday: () => dispatch(actions.birthday()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Person);

```
