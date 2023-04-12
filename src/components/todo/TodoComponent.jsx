import { useParams } from "react-router-dom"
import { getTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect } from "react"

export default function TodoComponent(){
    
    const {id} = useParams()
    
    const authContext = useAuth()
    const username = authContext.username

    useEffect(() => retrieveTodo(), [id])

    function retrieveTodo() {
        
        getTodoApi(username, id)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>

            </div>
        </div>
    )
}