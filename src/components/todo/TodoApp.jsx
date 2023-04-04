import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './TodoApp.css'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('gaspar')
    const [password, setPassword] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)
    const navigate = useNavigate()

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
            navigate('/welcome')
        } else {
            setLoginSuccess(false)
            setLoginFailed(true)
        }
    }

    return (
        <div className="Login">
            <h1>ToDoDoo</h1>
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
        <div>
            <h1>Welcome to ToDoDoo!</h1>
            <div className="Welcome">
                Improve Yourself, Study and Make stuffs.
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>We are under development!</h1>
            <div>This is a 404 Page.</div>
        </div>
    )
}