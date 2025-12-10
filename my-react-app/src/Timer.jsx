import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    // YOUR TASK: Use useEffect to increment seconds every 1000ms
    // Hint: setInterval + cleanup

    useEffect(() => {
        const timer1s = setInterval(() => {

            setSeconds(pre => pre + 1);
        }, 1000);
        return () => clearInterval(timer1s);
    }, []);

    return (
        <div>
            <h2>Timer: {seconds} seconds</h2>
        </div>
    );
}

export default Timer;