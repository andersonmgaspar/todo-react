import { useParams, Link } from "react-router-dom"
import { useState } from "react"

import { retrieveHelloWorld } from "./api/HelloWorldApiService";

function WelcomeComponent() {

    const { username } = useParams()
    
    const [message, setMessage] = useState(null)

    function callHelloWorldAPI() {
        console.log('hello world btn click')

        retrieveHelloWorld()
            .then((response) => successfullResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfullResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="Welcome">
            <h1>Welcome {username}!</h1>
            <div >
                Improve Yourself, Study and Make stuffs.
                <br/>
                <Link to='/todos'>Continue with yout TodoDoo</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldAPI}>Call Hello World!</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent