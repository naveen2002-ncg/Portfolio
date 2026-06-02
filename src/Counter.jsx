//create a counter program using useState hook and it include 2 buttons one for increment and other for decrement and reset value
import { useState } from "react"

function Counter() {
    const [count,setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <center>
        <div>
            <h1>Counter: {count}</h1>   
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        </center>
    )
}
export default Counter;


