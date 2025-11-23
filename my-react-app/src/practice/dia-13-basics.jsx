import { useState } from 'react';
import Counter from '../Counter';
import Greeting from '../Greeting';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [countGreeting, setCountGreeting] = useState(0);

  function handleGreet() {
    setCountGreeting(countGreeting + 1);
  }


  return (
    <div>
      <h1>Pipe Solarte</h1>

      <Greeting name={name} times={countGreeting} setTimes={handleGreet}></Greeting>
      
      <Counter 
        count={count} 
        setCount={setCount} 
        label="First counter" 
      />
      <Counter 
        count={count} 
        setCount={setCount} 
        label="Second counter" 
      />
      
      <p>Total clicks: {count}</p>
      
      <hr />
      
      <input 
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
  
}

export default App;