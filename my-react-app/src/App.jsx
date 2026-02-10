import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import SimpleForm from './components/SimpleForm';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SimpleForm />
    </>
  );
}

export default App;