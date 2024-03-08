import { useState } from "react"

 export default function Counter() {
    const [count, setCount] = useState(0)

    const addNumber = ()=>{
        const newCount = count + 1
        setCount(newCount)
    }

    const reduseNumber = ()=>{
        const newCount = count - 1
        setCount(newCount)
    }


    return(
        <div style={{border: '2px solid yellow', marginBottom: '30px'}}>
            <h2>Counter: {count} </h2>
            <div style={{display: 'flex', justifyContent: 'center', gap:'10px'}}>
                <button onClick={addNumber}>Add</button>
                <button onClick={reduseNumber}>Reduse</button>
            </div>
        </div>
    )
 }