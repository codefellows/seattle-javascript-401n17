import axios from 'axios';

let api = 'https://api-js401.herokuapp.com/api/v1/todo';

// this is broken, because redux doesn't like natively async actions
// export const get = async () => {
//   const response = axios.get(api);
//   const items = await response.data.results;
//   return {
//     type: "GET",
//     payload: items
//   }
// }

export const get = () => async dispatch => {
  const response = await axios.get(api);
  const items = response.data.results;
  dispatch({
    type: "GET",
    payload: items
  });
}

// This won't work ...
// 1. needs to be thunkified
// 2. axios put and get the response back
// 3. dispatch(get())

export const put = (payload) => async dispatch => {
  await axios.put(`${api}/${payload._id}`, payload);
  dispatch(get())
}
