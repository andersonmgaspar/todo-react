import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodosComponent() {

    //const today = new Date()
    // const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
    
    const authContext = useAuth()
    const username = authContext.username

    const [todos, setTodos] = useState([])

    const [message, setmessage] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        refreshTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function refreshTodos() {
        
        retrieveAllTodosForUsername(username)
            .then(response => {
                setTodos(response.data)

            })
            .catch(error => console.log(error))
    }


    function deleteTodo(id) {
        console.log('delete todo: ' + id)
        deleteTodoApi(username, id)
            .then(
                () => {
                    setmessage(`Todo removed successfully.`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log('update todo: ' + id)
        navigate(`/todo/${id}`)
        
    }

    return (
        <div className="container">
            <h1>Things you WANNA do!</h1>
            { message && <div className="alert alert-warning"> {message} </div> }
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                    <td><button className="btn btn-warning"
                                        onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success"
                                        onClick={() => updateTodo(todo.id)}>Update</button></td>
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
export default ListTodosComponent