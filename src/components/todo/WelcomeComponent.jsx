import { useParams, Link  } from "react-router-dom"
function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="Welcome">
            <h1>Welcome {username}!</h1>
            <div >
                Improve Yourself, Study and Make stuffs.
                <br/>
                <Link to='/todos'>Continue with yout TodoDoo</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent