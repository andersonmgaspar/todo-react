import axios from 'axios';
import { Buffer } from 'buffer';

function getBufferedToken() {
  const username = 'andi';
  const password = 'system10';

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');
  return encodedToken;
}

const encodedToken = getBufferedToken();

export function retrieveAllTodosForUsername(username) {
  const sessionUrl = `http://localhost:8080/users/${username}/todos`;

  const config = {
    method: 'get',
    url: sessionUrl,
    headers: { Authorization: `Basic ${encodedToken}` },
  };

  return axios(config);
}

export function deleteTodoApi(username, id) {
  const sessionUrl = `http://localhost:8080/users/${username}/todos/${id}`;
  const config = {
    method: 'delete',
    url: sessionUrl,
    headers: { Authorization: `Basic ${encodedToken}` },
  };

  return axios(config);
}

export function getTodoApi(username, id) {
  const sessionUrl = `http://localhost:8080/users/${username}/todos/${id}`;
  const config = {
    method: 'get',
    url: sessionUrl,
    headers: { Authorization: `Basic ${encodedToken}` },
  };

  return axios(config);
}
