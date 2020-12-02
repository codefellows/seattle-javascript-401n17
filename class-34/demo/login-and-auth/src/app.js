import React from 'react';

import LoginContext from './auth/context.js';
import Login from './auth/login.js';
import Content from './content.js';

function App() {

  return (
    <LoginContext>
      <h1>Login Demo</h1>
      <Login />
      <hr />
      <Content />
    </LoginContext>
  );
}

export default App;
