
import { useTheme } from './contexts/ThemeContext';



function Greeting({ name, times, setTimes }) {
    const { theme } = useTheme();
    console.log("El tema en el examen es:", theme);
    return (
        <div className={`app-container ${theme}`}>
            <h1>Hello, {name ? name : 'Guest'}, You've been greeted {times} times!</h1>
            <button onClick={() => setTimes()}> Greet Me</button>
        </div>
    );
}

export default Greeting;