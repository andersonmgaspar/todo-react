import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
function LoginComponent() {

    const [username, setUsername] = useState('andi')
    
    const [password, setPassword] = useState('')
    
    const [loginFailed, setLoginFailed] = useState(false)
    
    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setLoginFailed(true)
        }
    }

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-itens-center">
            <form>
                <h1>ToDoDoo</h1>
                {loginFailed && <div className='p-1 alert alert-warning'>Authenticated Failed. <br/>Check the credentials.</div>}
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" name="username" className="form-control" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    
                </div>
            </form>
            
        </div>
    )
}
export default LoginComponent