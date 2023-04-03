import { useState } from 'react'
import { PropTypes } from 'prop-types'

export default function CounterButton({by, incrementTotal, decrementTotal}) {
    
    const [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count + by)
        incrementTotal(by)
        console.log('increment clicked')
    }

    function decreaseCounter() {
        setCount(count - by)
        decrementTotal(by)
        console.log('decrease clicked')
    }
    
    return (
        <div className="Counter">
            
            <div>
                <button className="counterButton"
                        onClick={incrementCounter}>
                    +{by}
                </button>
                <button className="counterButton"
                        onClick={decreaseCounter}>
                    -{by}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}