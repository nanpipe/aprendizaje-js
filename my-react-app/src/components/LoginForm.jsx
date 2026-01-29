import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function LoginForm() {
  const { user, login, logout } = useAuth();
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  
  const handleLogin = () => {
    if (username.trim()) {
      login(username);
      setUsername(''); // Clear input after login
    }
  };
  
  // If user is logged in, show welcome message
  if (user) {
    return (
      <div className={`app-container ${theme}`}>
        <h2>Welcome, {user.username}! 👋</h2>
        <p>Logged in at: {user.loggedInAt}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  
  // If NOT logged in, show login form
  return (
    <div className={`app-container ${theme}`}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;