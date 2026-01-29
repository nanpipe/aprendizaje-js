import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function ProtectedContent() {
  const { user } = useAuth();
  const { theme } = useTheme();
  
  // If not logged in, show message
  if (!user) {
    return (
      <div className={`app-container ${theme}`}>
        <p>🔒 Please login to see secret content</p>
      </div>
    );
  }
  
  // If logged in, show the secret content
  return (
    <div className={`app-container ${theme}`}>
      <h3>Secret Content for {user.username}</h3>
      <p>🎉 You have access to this because you're logged in!</p>
      <ul>
        <li>Secret tip 1: Context API is powerful</li>
        <li>Secret tip 2: You're doing great</li>
        <li>Secret tip 3: Keep coding every day</li>
      </ul>
    </div>
  );
}

export default ProtectedContent;