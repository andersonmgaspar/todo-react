import axios from 'axios';
import { Buffer } from 'buffer';

const encodedToken = getBufferedToken();

function getBufferedToken() {
  var username = 'andi';
  var password = 'system10';

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');
  return encodedToken;
}

export function retrieveAllTodosForUsername(username) {
  var session_url = `http://localhost:8080/users/${username}/todos`;

  var config = {
    method: 'get',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}

export function deleteTodoApi(username, id) {
  var session_url = `http://localhost:8080/users/${username}/todos/${id}`;
  var config = {
    method: 'delete',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}

export function getTodoApi(username, id) {
  var session_url = `http://localhost:8080/users/${username}/todos/${id}`;
  var config = {
    method: 'get',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}