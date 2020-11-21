import FormWithClass from './components/form-with-class.js';
import FormWithFunction from './components/form-with-function.js';
import FormWithHook from './components/form-with-hooks.js'
import Car from './components/car.js'


function App() {
  return (
    <div className="App">
      <h2>Class Form</h2>
      <FormWithClass john="cool" />
      <hr />
      <FormWithFunction
        title="Form using a function component"
        username="john"
        background="dark"
        weather="sunny"
        go={(id) => alert('hi')}
      />
      <hr />
      <h2>Hook Form 1</h2>
      <FormWithHook />
      <hr />
      <h2>Car</h2>
      <Car />
    </div>
  );
}

export default App;
