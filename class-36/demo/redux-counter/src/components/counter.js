import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as potato from '../store/counter.js';
// import {decrement, increment} from "../store/counter.js";

function Counter() {

  const dispatch = useDispatch();
  const count = useSelector( (state) => state.counter.count )

  const addOne = () => {
    dispatch( potato.increment(10) );
  }

  const subtractOne = () => {
    dispatch( potato.decrement() );
  }

  useEffect( () => {
    dispatch( potato.initialize(1000) );
  }, [])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={subtractOne}>Subtract 1</button>
    <button onClick={addOne}>Add 1</button>
    </>
  )

}

export default Counter;
