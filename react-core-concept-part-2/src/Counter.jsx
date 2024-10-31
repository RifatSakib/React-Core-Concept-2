import { useState } from "react"

export default function Counter() {
    
    // const abc = useState(10);
    // console.log(abc);
    // // output:  [10, ƒ] ekhane ekta songkha arekta function




    const [count, setCount] = useState(0); //here 0 = initial value.

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}