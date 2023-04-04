import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('gaspar')
    const [password, setPassword] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === 'gaspar' && password === 'dev23') {
            setLoginSuccess(true)
            setLoginFailed(false)
        } else {
            setLoginSuccess(false)
            setLoginFailed(true)
        }
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button"name="login" onClick={handleSubmit}>Login</button>
                    
                </div>
            </div>
            {loginSuccess &&  <div className='successMessage'>Authenticated Successfully</div>}
            {loginFailed && <div className='errorMessage'>Authenticated Failed. Check the credentials.</div>}
            
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}