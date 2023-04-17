import axios from "axios";
import { Buffer } from "buffer";

function getBufferedToken() {
  const username = "andi";
  const password = "system10";

  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString("base64");
  return encodedToken;
}

export function retrieveHelloWorldBean() {
  const sessionUrl = "http://localhost:8080/hello-bean";
  const encodedToken = getBufferedToken();
  const config = {
    method: "get",
    url: sessionUrl,
    headers: { Authorization: `Basic ${encodedToken}` },
  };

  return axios(config);
}

export function retrieveHelloWorldBeanParameter(username) {
  const sessionUrl = `http://localhost:8080/hello-bean/${username}`;
  const encodedToken = getBufferedToken();
  const config = {
    method: "get",
    url: sessionUrl,
    headers: { Authorization: `Basic ${encodedToken}` },
  };

  return axios(config);
}
