import Counter from './counter.js';
import CounterClass from './counter-class.js';

// without this, we don't get the bootstrap "look" from their css
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap components that we'll use to style the "outer" application
// Header/footer/etc/
// Interior components will bring in their own Bootstrap components for their stuff
import Navbar from 'react-bootstrap/Navbar';

// App is a husk ...
// Brouser Router, Redux/Context (Global State things)
function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <span>John</span>
        </Navbar>
      </header>
      <Counter initialCount={4} />
      <CounterClass />
    </>
  );
}

export default App;
