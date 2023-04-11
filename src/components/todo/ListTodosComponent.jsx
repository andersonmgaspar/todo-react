import { useEffect, useState } from "react"
import { retrieveAllTodosForUsername } from "./api/TodoApiService"

function ListTodosComponent() {

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
    
    const [todos, setTodos] = useState([])

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        
        retrieveAllTodosForUsername('andi')
            .then(response => {
                setTodos(response.data)

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Things you WANNA do!</h1>
            <div>
                <table className='table'>
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
                                        <td>{todo.targetDate}</td>
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