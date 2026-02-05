import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />

      <div style={{ padding: '20px', background: '#333' }}>
        <p>This counter proves no reload happens: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>

      <nav style={{ padding: '20px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '20px' }}>Contact</Link>
        <Link to="/products" style={{ marginRight: '20px' }}>Products </Link>  {/* ← Add this */}
        <Link to="/dashboard"  >Dashboard</Link>  {/* Add this */}
      </nav>

      {/* This is where child routes render */}
      <Outlet />
    </>
  );
}

export default App;