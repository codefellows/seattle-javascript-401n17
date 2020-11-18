import React, {useState, useEffect} from 'react';

// Bootstrap Goodness!
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// useCallback, useMemo (built in ones)

// props.initialCount is the same as
// {initialCount}
function Counter( {initialCount} ) {

  const [count, setCount] = useState(0); // You may not (ever) set initial state from props
  const [multipled, setMultipled] = useState(0);
  const [loading, setLoading] = useState(false);

  function updateCounter() {
    setCount( count + 1);
    // setMultipled( count * 5 ) // because state hooks are asynchronous, this is a race condition -- moved this line to an effect hook that only runs AFTER count changes
  }

  // Will Run every time a re-render happens
  useEffect( () => {
    console.log('I am the effect hook that runs every time!');
  }); // There are no watchers here ... runs every time

  // Will Run only on the initial render
  // --- loading initial state from an API or LS
  useEffect(() => {
    setCount(initialCount);
    console.log('I am the effect hook that runs only once. Ever!');
  }, [initialCount]); // An empty watchers array means it only happens after initial render

  // Will Run only when "count" changes
  useEffect(() => {
    setMultipled( count * 5 ); // has a dependency on: count
    console.log('I am the effect hook that runs when count changes!');
  }, [count]);


  return (
     <div>
       {count} x 5 = {multipled}
      <Button variant="warning" onClick={updateCounter}>Add 1</Button>

      <hr />

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

     </div>
  );
}

export default Counter;
