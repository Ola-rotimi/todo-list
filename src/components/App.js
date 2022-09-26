import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [addItem, setAddItem] = useState([]);

  function addText(event) {
    setInputText(event.target.value);
  }

  function addHandling() {
    setAddItem(prevValue => [...prevValue, inputText])
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addText} type="text" value={inputText} />
        <button>
          <span onClick={addHandling}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItem.map(todoitem => <li>{todoitem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
