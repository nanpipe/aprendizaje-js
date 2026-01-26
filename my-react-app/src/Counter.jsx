
function Counter({ count, setCount, label }) {

  

  return (

    <div>
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