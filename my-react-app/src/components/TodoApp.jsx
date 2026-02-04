import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function TodoApp() {
  const { theme } = useTheme();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // Load todos from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };
  
  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
  
  // Stats
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;
  
  return (
    <div className={`app-container ${theme}`} style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h1>📝 Todo App</h1>
      
      {/* Input form */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {/* Filter buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFilter('all')}
          style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          All ({todos.length})
        </button>
        <button 
          onClick={() => setFilter('active')}
          style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
        >
          Active ({activeCount})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
        >
          Completed ({completedCount})
        </button>
      </div>
      
      {/* Todo list */}
      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>
          {filter === 'completed' ? 'No completed todos yet!' : 'No todos yet. Add one above!'}
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredTodos.map(todo => (
            <li 
              key={todo.id}
              style={{ 
                padding: '12px',
                marginBottom: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: todo.completed ? '#f0f0f0' : 'white'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : 'black'
                }}>
                  {todo.text}
                </span>
              </div>
              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{ background: '#ff4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;