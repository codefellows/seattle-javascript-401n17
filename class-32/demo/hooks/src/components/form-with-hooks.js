import React from 'react';

import useForm from '../hooks/form.js';

function Form(props) {

  const [handleSubmit, handleChange] = useForm(doneWithForm);

  async function doneWithForm(data) {
    // Call the API and save it...
    // await axios.post('http://....', data);
    // now, do a get ... to refresh the screen ... or just load the []
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="food" placeholder="Name Food" onChange={handleChange} />
      <input name="calories" type="number" onChange={handleChange} />
      <button type="submit">Save Food</button>
    </form>
  )
}

export default Form;
