import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../store/actions.js';

import axios from 'axios';

function ToDo(props) {

  const dispatch = useDispatch();
  const items = useSelector( state => state.todo);

  const markItComplete = async (item) => {
    item.complete = !item.complete; // this is lazy ...
    dispatch(actions.put(item))
  }

  useEffect( () => {
    dispatch(actions.get())
  }, [])

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {
          items.map( (item) =>
            <li
              onClick={() => markItComplete(item)}
              key={item._id}
            >{item.text} complete? {item.complete.toString()}</li>
          )
        }
      </ul>
    </>
  )

}

export default ToDo;
