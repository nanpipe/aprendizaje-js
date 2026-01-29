import { useTheme } from '../contexts/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
            <button onClick={toggleTheme}>
                Switch to {theme === 'dark' ? 'light' : 'dark'}
            </button>
        </header>
    );
}

export default Header;