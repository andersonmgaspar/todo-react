import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getTodoApi } from './api/TodoApiService';
import { useAuth } from './security/AuthContext';

export default function TodoComponent() {
  const { id } = useParams();

  const authContext = useAuth();
  const { username } = authContext;

  function retrieveTodo() {
    getTodoApi(username, id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => retrieveTodo(), [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div />
    </div>
  );
}
