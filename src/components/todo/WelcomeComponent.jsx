import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { retrieveHelloWorldBeanParameter } from "./api/HelloWorldApiService";

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  function successfullResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
    setMessage("Falha no servidor. Tente novamente mais tarde.");
  }

  function callHelloWorldAPI() {
    console.log("hello world btn click");

    retrieveHelloWorldBeanParameter(username)
      .then((response) => successfullResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}!</h1>
      <div>
        Improve Yourself, Study and Make stuffs.
        <br />
        <Link to="/todos">Continue with yout TodoDoo</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" type="button" onClick={callHelloWorldAPI}>
          Call Hello World!
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;
