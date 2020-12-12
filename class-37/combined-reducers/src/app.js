import {Provider} from 'react-redux';
import store from './store/index.js';
import Voting from './voting.js';

// Wrap our app's component tree in a <Provider/> ... this is a Context
// Redux special amazing context that does all the state management for us
function App() {
  return (
    <Provider store={store}>
     <Voting />
    </Provider>
  );
}

export default App;
