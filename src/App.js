import React from "react";
import Try from "./Try";

function App() {
  const [app, setApp] = React.useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    option: [],
  });
  const [result, setResult] = React.useState("");

  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? "Here are your options" : "No Option"}</p>
      <button 
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * app.option.length);
          setResult(<p>{app.option[randomNumber]}</p>);
        }}
        disabled={app.option.length > 0 ? false : true}
      >
        What should I do?
      </button>
      {result !== "" && result}

      <button
        onClick={() => {
          setApp({ ...app, option: [] });
          setResult("");
        }}
      >
        Remove All
      </button>

      <ol>
        {app.option.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          const newOption = e.target.elements.option.value;
          if (newOption) {
            setApp({ ...app, option: [...app.option, newOption] });
            e.target.elements.option.value = "";
          }
        }}
      >
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <Try />
    </div>
  );
}
export default App;
