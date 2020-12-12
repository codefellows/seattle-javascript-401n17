const inititalState = {
  1234: { name:"John", didVote: false },
  6789: { name: "Zach", didVote: false },
}

export default function reducer( state=inititalState, action) {
  const {type, payload} = action;

  switch( type ) {
    case "VOTE":
      // payload has 2 properties: candidate, voter
      // Remember: always return the ENTIRE next state, with just your changes...
      return { ...state, [payload.voter]: {...state[payload.voter], didVote: true}}

      // return: spread out state, change state[payload.voter] is to:
      //                      { spread out state[payload.voter] to what it was, but didVote changes}
    default:
       return inititalState;
  }
}
