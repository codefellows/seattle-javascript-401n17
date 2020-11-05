# Facilitators Guide: Application State with Redux

## Overview

Redux - Global State Management

### How does this topic fit?

**Where we've been**:
Previously, we've covered state management through a top down (one way) data flow using Class components and Function components with hooks. We have also worked with the Context API to manage state at a global level. Students should be solid on the notion that React is great because it reacts in real time to state changes.

**What are we focusing on today**:
Today, we look at Redux, which is yet another way to manage state. Redux excels at dealing with complex state that is meant to be shared by components throughout the application. It does not excel at simplicity, so today will be a challenge for many students, simply due to the number of connected pieces that Redux requires.

**Where we're headed**:
As we progress in this module, we'll be doing more and more practice with the core Redux concepts. We will introduce a few different patterns for wiring Redux, but the primary focus for this module will be fluency.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

> Our primary outcomes and goals for the day are for students to understand the basic wiring of Redux in a React application. As there is a lot to it, we don't want to overwhelm them with an expectation of full competence just yet. So long as they can get an app wired at a basic level, we can build from there with them.

## Preparation

- Read up on different patterns people use to build Redux stores. There are many
  - Why? We'll teach one way, but students might have questions that lead you to try/experiment with other ways.
- Prepare some drawings that you can use to make sense of the various connections between the components and the store.
- Get ready for questions about what problems (real world) that Redux actually solves
- Look at previous course student submissions for insight as to what you might see in code review.
- Practice the redux demo (redux). It's build as an intentional refactor from Context into Redux.
- Practice building out context quickly (and as a recap) so that you can built it again in Redux and be able to compare and contrast.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm Up

As an option (if time allows), break your class into small groups and complete the [warm-up exercise](../warm-up/README.md) for the day. The warm-ups are designed to take about 30 minutes, working the class through an incremental build of a JS Helper Library and a set of CSS components.

These are a fun way to get your days kicked off, if your schedule and code review time allocation allow for it. Review the [warm-up overview](../../warm-ups/README.md) for guidance.

### Code Review

- Notes here

<!-- Keep this here "as is" for 201/301 only ... other courses can remove! this section) -->
### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### TOPIC 1: Component Libraries - Material UI

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

### TOPIC 2: Redux - Terminology and High Level Overview

- **Why** (5 min)
  - Global state is a real need
  - Not every application is built from components that solely manage their own state
  - They very often need to share state
  - We can pass it down through props
    - But this makes for a "God Component" that knows all. That's too big to manage and creates a single choke point
  - We can use context
    - But each "Context" is for one part of state.
    - It's just not meant for complexity
    - There's clearly a difference between simple application state and application context
      - Context is great for things like metadata, theme, settings, login state, etc
      - But how can we manage bigger data, like a list of todo items or all of the products in a store?
- **What** (10 min)
  - REDUX!
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
  - Create a "Store"
    - First, create one or more `reducers` as modules
      - Declare an initial state
      - Return a function  that takes 2 parameters: initial state and the action to perform
      - Based on the 'type' of action, return the "next state" by altering the 'initial state' parameter
        - Notice that this follows the same pattern as `Array.reduce()` "state" is actually the accumulator
        - Reducers are "pure" functions in that they don't actually mutate state directly
    - Second, declare your actions.
      - Actions are an object with a "type" that matches a case in your reducer
      - Optionally, they can include data (known as "payload")
      - Usually, we create actions as functions (action creators) that return action objects
    - Third, create a store that is assembled by collating your reducers
  - Connect your Application to the Store
    - Wrap your `<App>` in a Redux "provider" ... `<Provider store={store}>`
      - **This technically is Context** -- every component in the application can now "see" the store
      - Redux itself is actually built using Context and Hooks!
  - Have your components "Opt In" to using the store to display and manage global state
    - Import your actions
    - Map the state from the store so that you can access it as a `prop` in your component
    - Map the actions from the store so that you can access them as a `prop` in your component
    - Connect to the store
    - You can now use `props` to render your state
    - You can also "dispatch" actions so that the store can respond to them
- **Exploration and Discovery**
  - This is, theoretically, one of the biggest concepts in React
  - It helps to talk through the "How" section using a combination of Whiteboard pictures and pseudocode
  - Writing code too early can divert the students' attention from the core concepts

### DEMO

The demo for today (detailed in the [demo notes](./DEMO.md)) is designed to help the students connect with what they already know. You'll be building a simple application using Context to set a baseline. Then, taking that same concept, create the application again in Redux to draw comparisons, but focusing on the wiring and helping them connect what they know with where we're going.

## Lab Notes

Be prepared for a lot of lost students today. It's normal when they first encounter Redux and have to connect all of the dots. Additionally, they'll be using Material UI for the first time. Although this takes most of the pain of styling away, there's still documentation to wade through.

Remind them, though, that everything here, while new in how it's cobbled together is still things they already know. Help them to see those equivalents as they go through the process.

- Reducers (reducer hook)
- Context (the Provider is just a context object)
- Store is just a function that feeds the provider what it wants
- Map state/dispatch to props is just a different way to export your component. It makes it really easy to "feed" state and actions to a component (subscribe)

## What might students struggle with today?

- Wiring and the various connections that it takes to make Redux work.
- Understanding the Material UI Documentation and examples

## Past bugs, issues or surprises...

## General Comments and Notes

- Work extra hard in lecture, demo, and in Q&A dealing with how things are referenced and called.
- Draw lots of pictures to assist
- For the students, this is going to:
  - Solve a problem they don't yet have
  - Solve it in a way that is going to feel very "magical"
