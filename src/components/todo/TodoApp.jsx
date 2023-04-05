import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}/>
                    <Route path='/todos' element={<ListTodosComponent />} />
                    
                    <Route path='/logout' element={<LogoutComponent />}/>
                    <Route path='*' element={<ErrorComponent />}/>
                    
                </Routes>
            </BrowserRouter>
            <FooterComponent />
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
            navigate(`/welcome/${username}`)
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

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>We are under development!</h1>
            <div>This is a 404 Page. We need tododoo more.</div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+1, today.getMonth(), today.getDay())
    const todos = [
                    { id: 1, description: 'Learn AWS', done:false, targetDate: targetDate },
                    { id: 2, description: 'Learn Spring Microservices', done:false, targetDate: targetDate },
                    { id: 3, description: 'Learn React.js',done:false, targetDate: targetDate }
                  ]
    return (
        <div className="ListTodos">
            <h1>Things you WANNA do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            Footer <hr/>
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="Logout">
            <h1>Your are logged out!</h1>
            <div>
                Thank you for using the TodoDoo. Comeback to improve yourself soon.
            </div>
        </div>
    )
}
