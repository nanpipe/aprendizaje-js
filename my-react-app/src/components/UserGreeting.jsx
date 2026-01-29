import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function UserGreeting() {
  const { user } = useAuth();
  const { theme } = useTheme();
  
  return (
    <div className={`app-container ${theme}`}>
      <h2>
        {user ? `Hey ${user.username}, nice to see you! 🎉` : 'Hey stranger! 👋'}
      </h2>
    </div>
  );
}

export default UserGreeting;