let initialState = [
  {name: "John", votes:0 },
  {name: "Cathy", votes:0 },
  {name: "Zach", votes:0 },
  {name: "Allie", votes:0 },
];

// Reducer function takes in the current state and returns the next state
export default function reducer(state=initialState, action) {
  // let {type, payload} = action;

  switch( action.type ) {
    case 'VOTE':
      // get a candiate object and need to up the vote count
      // action.payload is the candidate
      return state.map( candidate => {
        if(candidate.name === action.payload.candidate.name) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        } else {
          return candidate;
        }
      });
      // Ugly/Beautiful(spread) way ...
      // return state.map( candidate => candidate.name === action.payload.name ? {...candidate, votes: candidate.votes + 1} : candidate )
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// In the app, we will dispatch the "castVote" action with a person object as the param
export const castVote = (person, voter) => {
  return {
    type: 'VOTE',
    payload: {
      candidate: person,
      voter: voter
    }
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}
