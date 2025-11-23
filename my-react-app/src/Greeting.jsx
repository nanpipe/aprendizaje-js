import React from 'react';

function Greeting({ name, times, setTimes }) {
    return (
        <div>
            <h1>Hello, {name ? name : 'Guest'}, You've been greeted {times} times!</h1>
            <button onClick={() => setTimes() }> Greet Me</button>
        </div>
    );
}

export default Greeting;