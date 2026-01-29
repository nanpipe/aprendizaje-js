import { createContext, useState, useContext } from 'react';

// 1. Create the context (same as ThemeContext)
const AuthContext = createContext();

// 2. Create the Provider component
export function AuthProvider({ children }) {
  // Store the logged-in user (null = nobody logged in)
  const [user, setUser] = useState(null);
  
  // Function to log someone in
  const login = (username) => {
    setUser({ 
      username: username,
      loggedInAt: new Date().toLocaleTimeString()
    });
  };
  
  // Function to log someone out
  const logout = () => {
    setUser(null);
  };
  
  // Provide user + functions to all children
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}
