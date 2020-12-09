const initialState = {
  count:0
};

/*
  All actions look like this:
  {
    type: "DOSOMETHING",
    payload: [1,2,3]
  }
*/

export default function reducer( state=initialState, action ) {
  // const type = action.type;
  // const payload = action.payload;
  // Use object deconstruction to make those 2 lines happen like magic ...
  const {type, payload} = action;

  // Lots of ifs can be ugly
  // if(type === "x") { }
  // else if ( type === "y" ) { }
  // else if ( type === "z" ) { }

  // Switch makes it easier to read
  switch(type) {
    case "INITIALIZE":
      return { count: parseInt(payload, 10) }
    case "INCREMENT":
      return { ...state, count: state.count + payload}
    case "DECREMENT":
      return { ...state, count: state.count - 1}
    default:
      return state;
  }
}

// elsewere ... import {increment} from 'thisfile'
// Action Creator -- a function that returns an action object
export const increment = (step) => {
  step = parseInt(step, 10) || 1;
  return {
    type: "INCREMENT",
    payload: step,
  }
}

export const decrement = () => {
  return {
    type: "DECREMENT",
  }
}

export const initialize = (number) =>  {
  number = parseInt(number, 10);
  return {
    type: 'INITIALIZE',
    payload: number
  }
}
