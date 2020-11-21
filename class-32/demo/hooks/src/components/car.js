import React from 'react';

import useForm from '../hooks/form.js';

function Form(props) {

  const [handleSubmit, handleChange] = useForm(doneWithForm);

  function doneWithForm(data) {
    // Call the API and save it...
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="vehicle" placeholder="What do you drive?" onChange={handleChange} />
      <input name="miles" type="number" onChange={handleChange} />
      <button type="submit">Save Car</button>
    </form>
  )
}

export default Form;
