function Counter({ count, setCount, label }) {
  return (
    <div>
      <p>{label}: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;