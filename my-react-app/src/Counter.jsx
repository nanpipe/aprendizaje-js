import { useTheme } from './contexts/ThemeContext';

function Counter({ count, setCount, label }) {

  const { theme } = useTheme();
    console.log("El tema en el examen es:", theme);

  return (
    
    <div className={`app-container ${theme}`}>
      <p>{label}: {count} times</p>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;