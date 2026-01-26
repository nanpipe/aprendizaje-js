import Counter from './Counter';
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  const label = 'contador'
  return (
    <>
      <Counter count={count} setCount={setCount} label={"Temporizador"} />
    </>
  )
}

export default App;