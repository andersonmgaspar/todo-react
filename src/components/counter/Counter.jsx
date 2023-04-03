import { useState } from 'react'
import CounterButton from './CounterButton';

import './Counter.css'

export default function Counter() {

    const [totalCount, setCount] = useState(0);


    function incrementTotalCounter(by) {
        setCount(totalCount + by)
    }

    function decrementTotalCounter(by) {
        setCount(totalCount - by)
    }

    return (
        <>
            <span className="totalCount">{totalCount}</span>
            <CounterButton incrementTotal={incrementTotalCounter} decrementTotal={ decrementTotalCounter} />
            <CounterButton by={2} incrementTotal={incrementTotalCounter} decrementTotal={ decrementTotalCounter} />
            <CounterButton by={6} incrementTotal={incrementTotalCounter} decrementTotal={ decrementTotalCounter} />
        </>
    )

}

