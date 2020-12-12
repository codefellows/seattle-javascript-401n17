import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {If,Then,Else} from 'react-if';

import * as actions from './store/candidates-reducer';
// actions.castVote and actions.reset are now useable

// Alternatively ... pull them out by name
// import {castVote, reset} from './store/candidates-reducer;


function Voting(props) {
  const [voterId, setVoterId] = useState(null);
  const candidates = useSelector( state => state.candidates )
  const voters = useSelector( state => state.voters );
  const dispatch = useDispatch();

  const handleChangeId = (e) => {
    setVoterId( e.target.value );
  }

  return (
    <>
    <h1>Voting Time</h1>
    <table>
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        {
          candidates.map( candidate =>
            <tr key={Math.random()}>
              <If condition={voters[voterId] && !voters[voterId].didVote} >
                <Then>
                  <td
                    onClick={() => dispatch(actions.castVote(candidate, voterId))}
                  >
                    {candidate.name}
                  </td>
                </Then>
                <Else>
                  <td>{candidate.name}</td>
                </Else>
              </If>
              <td>{candidate.votes}</td>
            </tr>
          )
        }
      </tbody>
    </table>

    <form>
      <input name="voter-id" placeholder="id" onChange={handleChangeId}></input>
      <button onClick={ () => dispatch(actions.reset() )} >Reset All Votes</button>
    </form>
    </>

  )

}

export default Voting;




// const square = (number) => {return number * number};
// const square = number => {return number * number};
// const square = number =>
//   number * number;

