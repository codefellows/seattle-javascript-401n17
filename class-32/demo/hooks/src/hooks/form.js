import {useState} from 'react';

// The "callback" is going to come from the component
// It'll be used by the component (maybe) as it's onSubmit

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues( {...values, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback && callback(values);
    // if(callback) { callback(values) }
  }

  return [handleSubmit, handleChange, values ];

}

export default useForm;
