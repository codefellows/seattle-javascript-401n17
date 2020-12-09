import store from './store'
import {Provider} from 'react-redux';
import Counter from './components/counter.js';

function App() {
  return (
    <Provider store={store}>
     <Counter />
    </Provider>
  );
}

export default App;
