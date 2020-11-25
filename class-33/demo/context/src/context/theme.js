// Theme Context -- Global State and Function "The Cloud of data"

import React, {useEffect, useState} from 'react';

export const ThemeContext = React.createContext();
// USAGE: import {ThemeContext} from 'this-file';

function Theme(props) {

  const [mode, setMode] = useState('');

  const toggleMode = () => setMode( mode === "dark" ? "light" : "dark" );

  useEffect( () => {
    setMode(props.default);
  }, [props.default]);

  /*
   Alternative to the {{obj}} below
   const sharedStuff = {
     mode: mode,
     toggleMode: toggleMode
   }
    <ThemeContext.Provider value={sharedStuff}>
  */
  return (
    <ThemeContext.Provider value={ {mode,toggleMode} }>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default Theme;
// USAGE: import Potato from 'this-file'
