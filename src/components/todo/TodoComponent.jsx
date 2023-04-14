import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTodoApi } from './api/TodoApiService';
import { useAuth } from './security/AuthContext';

export default function TodoComponent() {
  const { id } = useParams();

  const [description, setDescription] = useState('');

  const authContext = useAuth();
  const { username } = authContext;

  function retrieveTodo() {
    getTodoApi(username, id)
      .then((response) => {
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => retrieveTodo(), [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <label className="form-label" htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
