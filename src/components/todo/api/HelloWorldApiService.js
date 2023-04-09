import axios from 'axios';
import { Buffer } from 'buffer';

export function retrieveHelloWorld() {
  var session_url = 'http://localhost:8080/hello';

  var username = 'andi';
  var password = 'system10';

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString('base64');

  var config = {
    method: 'get',
    url: session_url,
    headers: { Authorization: 'Basic ' + encodedToken },
  };

  return axios(config);
}
