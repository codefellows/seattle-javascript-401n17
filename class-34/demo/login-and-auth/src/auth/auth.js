import React, {useContext} from 'react';

import {LoginContext} from './context.js';
import {When} from 'react-if';
import Login from './login.js';

function Auth(props) {

  const loginContext = useContext(LoginContext);

  let okToRender = false;

  try {
    // canDo == if we asked for a capability AND user can do it
    let canDo = props.capability
      ? loginContext.user.capabilities.includes(props.capability)
      : true;

      okToRender = loginContext.isLoggedIn && canDo;
  } catch(e) {
    console.warn('Not Authorized')
  }

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )

}

export default Auth;
