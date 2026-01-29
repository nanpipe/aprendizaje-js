import { createContext, useState, useContext } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Create provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook to use context
export function useTheme() {
  return useContext(ThemeContext);
}