# DEMOS - Application State with Redux

## Execution

Demos are provided in the `demo` folder in the guide repository. They are created with `create-react-app` and are suitable to install and run locally or at [Code Sandbox](http://codesandbox.io).

At Code Sandbox, simply create a new app using "GitHub" and point it at the the appropriate demo folder and it'll spin the app up for you. Saves a lot of time and also shows the students the value of doing quicker "POC" style work in an online IDE and then executing production code in their actual IDE.

## Demo: Material UI Styling

> `/demo/material-ui-styling`

This simple demo shows students to incorporate a 3rd party component library. The intent here is twofold:

1. Make it "easier" to match a mock, given the common ground a styling library provides
1. Make them read docs and learn how to implement

Your goal in this demo is simply to fire up a simple application, require in Material UI (according to their installation instructions) and use a couple of components.

Specifically, this demo showcases a bit of how Material does layout, along with a card, typography, and paper backgrounds. Note that even though this library "wraps" components in it's own styling garb, you can still attach event handlers as you normally would, and can easily tweak the UI to your tastes.

Focus on the [grid system](https://material-ui.com/components/grid/) and [theme overrides](https://material-ui.com/styles/basics/) using the Hooks API. It's the easiest to understand and implement, but encourage students to try out the other methods.

This should get them on their way towards making the lab match the provided mocks.

## Demo - Voting App

> `demo/redux`

This demo will result in a voting application that showcases a few core features that are similar to what students will be executing in their lab assignment.

- A reducer that has an initial state of an array of items
- 2 Components that both access the state from that reducer
  - 1 which iterates the list, showing a person and their vote total
    - This component also uses an action to change the vote total for each person
  - 1 which displays one item from state (the total votes)

To build this out, it's important that you follow a logical progression or the amount of things happening will easily overwhelm the students.

1. Build just the App and the Vote component
   - In the vote component, create an empty array and map over it, creating `<li></li>` tags
1. Since we need some state, begin by building out the reducer in as small a way as possible
   - An initial state with a few people in it
   - A reducer function that has a switch case on the action type
   - But only handles "default", which returns the full state
   - i.e.

     ```javascript
     let initialState = {
       candidates: [
         { name: 'Mary', votes: 0 },
         { name: 'Bob', votes: 0 },
         { name: 'Jamie', votes: 0 },
       ]
     };

     export default (state = initialState, action) => {
       let { type, paylaod } = action;
       switch (type) {
         default:
           return state;
       }
     }
     ```

1. Now that you have "state" available, lets get it to the component
1. Build the store, consuming that reducer.
   - We use combine reducers to build this even though there's only one reducer
   - It allows you to name the state variable from the reducer, so even though we only have one, it's good practice to name it for later access.
1. Provide the store to the `<App />`
   - Add redux to the app, initialize the store, and wrap app in the `<Provider />`
1. At this point, your app should "still work" even though the component isn't showing data
   - Our proof here is that we have a reducer, a store, and the provider -- and no errors
1. Now, connect the component to the provided store.
   - Once you connect and describe how `mapStateToProps` works, use `props.candidates` as the array!
   - You should start to see the people in the list

**Celebrate and Recap**

That's the basic wiring of a React application with Redux as the state manager.

Now, focus on making it more useful.

1. Add vote counts to each person and a totalVotes key to the state object
1. Add an action creator called `INCREMENT` that accepts a name
1. Add a clause to the `switch` to handle increment
1. Within that clause, update the state and return the next state

Lots to talk about there -- how actions creators are functions that return an action object, and how reducers can look at the action and see what to do and the payload/data to do it with.

The only thing left is to wire in that action to the component and add click handlers to the list items.  Once you do this, you should be able to vote on people and see them update.

### Stretch Goal for Demo

You may not get to this, depending on time and overall understanding. If you don't get to this, it's a good idea to still provide students with the full demo code and at the least, spend a few minutes in a quick code review of the 'status' component

The Status component is built as a second component ... a sibling to the vote counter that will ALSO connect to the store and render a single piece of data from state. It's a pretty simple build, requiring a connection to the store, and the addition of the totalVotes counter to the reducer

This is an important connection for everyone to make -- 2 components at the same level, each accessing the same store in slightly different ways so that they can show the thing they're tasked with showing.

## Draw Pictures!

Students will really benefit from you creating a visual representation of the store and how components connect to it before you build out the code.
