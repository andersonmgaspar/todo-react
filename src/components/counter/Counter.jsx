import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    
    const [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count+1)
        console.log('increment clicked')
        
    }
    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                        onClick={incrementCounter}>
                    +1
                </button>
            </div>
        </div>
    )
}