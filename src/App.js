import React, { useState, Fragment } from "react";
import "tachyons";

const LambdaDemo = () => {
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState(null);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleClick = (api) => (e) => {
    e.preventDefault();

    setLoading(true);
    fetch("/.netlify/functions/" + api)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        setMessage(json.msg);
      });
  };

  const handlePost = (e) => {
    if (!input) {
      return alert("enter input");
    }
    e.preventDefault();

    fetch("/.netlify/functions/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        input,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setInput("");
        setResponse(json.data);
        setLoading(false);
      });
  };

  const userCard = () => {
    return (
      <Fragment>
        <h1>response: {response}</h1>
      </Fragment>
    );
  };

  return (
    <p className="tc">
    <h1>THIS IS WORKING LOCALLY AND ON PRODUCTION AS OF <br/> <span className="tracked dark-red"> 20221003T11:48-0600</span></h1>
    <a
					href="https://github.com/Kirbyasdf/netlify-react-lambda-node-boilerplate"
					className=" link "
					target="_blank"
					rel="noopener noreferrer"
				><h3 className=" i ma4 tracked gold">It is managed by <span className="dark-green ba pa3">KIRBYASDF</span> </h3></a>
      <button onClick={handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
      <button onClick={handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
      <button onClick={handleClick("api/")}>{loading ? "Loading..." : "Node Server Test"}</button>
      <button onClick={handleClick("api/server-test")}>{loading ? "Loading..." : "Node Server Router Test"}</button>
      <br />
      <span className="f1 grow blue">{message}</span>
      <br />
      <span>enter a name to say hi to for the post test</span>
      <br />
      <input  className="ma3" value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={(e) => handlePost(e)}>{loading ? "Loading..." : "Call Post Lambda"}</button>
      <Fragment>{userCard()}</Fragment>
    </p>
  );
};

const App = () => {
  return (
    <div className="bg-white    vh-100 pa1">
      <LambdaDemo />
    </div>
  );
};

export default App;
