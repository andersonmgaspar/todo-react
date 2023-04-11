import axios from 'axios';
import { Buffer } from 'buffer';

function getBufferedToken() {
  var username = 'andi';
  var password = 'system10';

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');
  return encodedToken;
}

export function retrieveHelloWorldBean() {
  var session_url = 'http://localhost:8080/hello-bean';
  const encodedToken = getBufferedToken();
  var config = {
    method: 'get',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}

export function retrieveHelloWorldBeanParameter(username) {
  var session_url = `http://localhost:8080/hello-bean/${username}`;
  const encodedToken = getBufferedToken();
  var config = {
    method: 'get',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}
