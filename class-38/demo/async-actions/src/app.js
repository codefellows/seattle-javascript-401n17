import {Provider} from 'react-redux';
import store from './store/index.js';
import ToDo from './components/todo';

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
