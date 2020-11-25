import ContentFunction from './components/content-function.js';
import ContentClass from './components/content-class.js';

import ThemeContext from './context/theme.js';
import SiteContext from './context/site.js';

function App() {
  return (
    <SiteContext>
      <ThemeContext default="dark">
       <ContentFunction  />
       <hr />
       <ContentClass />
      </ThemeContext>
    </SiteContext>
  );
}

export default App;
