import React, {useContext} from 'react'; // React 17: No longer needed

import {ThemeContext} from '../context/theme.js';
import {SiteContext} from '../context/site.js';
import ThemeChanger from './theme-changer.js'
import SiteChanger from './site-changer.js'

// react-if component will help!
// <When condition={somethingistrue}>REnder these things</When>

function Content(props) {

  const themeContext = useContext(ThemeContext);
  const siteContext = useContext(SiteContext);  // reach up to the "cloud" and gain access to all that was provided

  return (
    <section>
      <h2>Rendered by a Function</h2>
      <h3>{siteContext.title}</h3>
      <h3>Twitter: @{siteContext.twitter}</h3>
      <h4>Current Mode: {themeContext.mode}</h4>
      <ThemeChanger />
      <SiteChanger />
    </section>
  )

}

export default Content;
