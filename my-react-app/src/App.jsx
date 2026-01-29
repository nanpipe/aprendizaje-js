import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ProtectedContent from "./components/ProtectedContent";
import Week3_exam from "./Week3_exam";
import Counter from "./Counter";
import Greeting from "./Greeting";
import Header from "./components/Header";
import UserGreeting from "./components/UserGreeting";



function App() {
    function handleGreet() {
        setCountGreeting(countGreeting + 1);
    }

    const [count, setCount] = useState(0);
    const [countGreeting, setCountGreeting] = useState(0);
    const [name, setName] = useState('');
    return (
        <>
            <Header />
            <LoginForm />
            <ProtectedContent />
            <UserGreeting/>
            <Week3_exam />
            <Counter count={count} setCount={setCount} label="First counter" />
            <Greeting name={name} times={countGreeting} setTimes={handleGreet} />
        </>
    )
}

export default App;