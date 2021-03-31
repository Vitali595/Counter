import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";

function App() {

    let [count, setCount] = useState<number>(0)

    const addCount = () => {
        setCount(count + 1);
        if (count >= 5) {
            setCount(5)
        }
    }

    const resetCount = () => setCount(0);

    return (
        <div className="App">
            <Buttons
                addCount={addCount}
                resetCount={resetCount}
                count={count}
            />
        </div>
    );
}

export default App;
