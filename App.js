import { useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({ name: " ", interest: "" });
  // const[course,setCouse]=useState({name:""})

  function handleChange(e) {
    // console.warn(inputdata);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }
  let { name, interest } = inputdata;

  function addItem() {
    setArray([...array, { name, interest }]);

    setInputdata({ name: "", interest: "" });
    console.warn(inputdata.name);
  }
  console.warn(array);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        value={inputdata.name || ""}
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      ></input>
      <select
        name="interest"
        value={inputdata.interest}
        onChange={handleChange}
      >
        <option>Choose from below</option>
        <option>Bsc</option>
        <option>Msc</option>
      </select>
      <button onClick={addItem}>Submit</button>
      <div>
        <table border="1">
          <tr>
            <td>Name</td>
            <td>Subject</td>
          </tr>
          {array.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.interest}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
export default App;
