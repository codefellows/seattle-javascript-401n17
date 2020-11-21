import React, {useEffect, useState} from 'react';

// function Form(props) {
  // Now you'd use props.thing
// props is an object, so you can also deconstruct it ...
  // this lets you just use thing
function Form({title, username, background, weather, go}) {

  // Initial state: values is going to be an object
  // setValues is a function that we use to change "values"
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const handleChange = (e) => {
    // ...values = makes a "copy" of values
    // , [key]:value = adds or updates "key" in that object with value
    setValues( {...values, [e.target.name]: e.target.value});
  }

  useEffect( () => {
    if( Object.keys(values).length) {
      console.log('values has something in it');
    }
  }, [values]);

  return (
    <>
    <h2 onClick={go}>{title}</h2>
    <div>{username} says it is {background} and {weather}</div>
    <form onSubmit={handleSubmit}>
      <input name="food" placeholder="Name a food" onChange={handleChange} />
      <input name="calories" type="number" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form;
