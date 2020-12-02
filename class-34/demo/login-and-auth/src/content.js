import React from 'react';

import Auth from './auth/auth.js';

function Content(props) {

  return (

    <>
      <h2>Everyone can see this</h2>
      <Auth>
        <h2>Anyone logged in can see me</h2>
      </Auth>
      <Auth capability="read">
        <h2>Anyone that can read can see this</h2>
      </Auth>
      <Auth capability="create">
        <h2>Anyone that can create can see this</h2>
      </Auth>
      <Auth capability="delete">
        <h2>Anyone that can delete can see this</h2>
      </Auth>
    </>

  )

}

export default Content;
