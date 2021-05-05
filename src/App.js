import React from "react";

function App() {
  const [app, setApp] = React.useState({
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    option: [],
  });

  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length}</p>
      <button
        onClick={() => {
          setApp({ ...app, option: [] });
        }}
      >
        Remove All
      </button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          const newOption = e.target.elements.option.value;
          if(newOption) {
            setApp({ ...app, option: [...app.option, newOption] });
            e.target.elements.option.value = "";
            console.log(app.option);
          }
        }}
      >
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
}
export default App;
