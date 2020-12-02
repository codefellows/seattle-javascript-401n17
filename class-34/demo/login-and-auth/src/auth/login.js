import React, {useState, useContext} from 'react';

import {LoginContext} from './context.js';

import {If, Then, Else} from 'react-if';

function Login(props) {

  const userContext = useContext(LoginContext);
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    userContext.login(user);
  }

  const handleChange = (e) => {
    setUser( { ...user, [e.target.name]: e.target.value })
  }

  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <button onClick={userContext.logout}>Log Out</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </Else>
    </If>
  )
}

export default Login;
