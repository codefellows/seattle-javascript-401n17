import React from 'react';

import {ThemeContext} from '../context/theme.js';
import ThemeChanger from './theme-changer.js'

class Content extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        { themeContext => (
          <section>
            <h2>Rendered by a Class</h2>
            <h3>title goes here</h3>
            <h4>Current Mode: {themeContext.mode} </h4>
            <ThemeChanger />
          </section>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Content;
