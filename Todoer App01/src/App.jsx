import "./App.css";
import * as React from "react";
import { ReactDOM } from "react-dom";

function App() {
  const [name, setName] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const showMassage = () => {
    if (name === "") {
      return alert("please enter text");
    }
    setTodo((prev) => [...prev, name]);
  };

  const myList = [];

  console.log(todo);
  return (
    <div className="App">
      <h1>TODOER</h1>

      <h2>What do you want to do today</h2>

      <div>
        <br></br>
        <div className="inp-wrapper">
          <div className="inp-cont">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Learn Code"
              className="inp"
            />
            <button className="btn" onClick={showMassage}></button>
          </div>
        </div>

        <input type="text" placeholder="Search" className="search" />
        <br />

        <div className="parent">
          <div className="box">
            <div className="filter">
              <label htmlFor="all" className="select">
                <input type="checkbox" name="all" />
                select
              </label>
              <select>
                <option value="completed">completed</option>
              </select>
            </div>
            <ul>
              {myList.map((list, index) => (
                <li>{list}</li>
              ))}
            </ul>
            <div className="radio">
              <input type="radio" name="" className="Redio" /> All
              <input type="radio" name="" className="Redio" />
              Completed
              <input type="radio" name="" className="Redio" />
              On Hold
            </div>
          </div>
        </div>
        <br />
        <div className="map">
          <div>
            {todo?.map((todo, index) => (
              <div className="bottom">
                <div className="todo-res">
                  <input type="checkbox" name="all" id="" />
                  <h3 key={index}>{todo}</h3>
                </div>
                <div className="abc">
                  <div className="efg">
                    <select>
                      <option value="In-progress">In-progress</option>
                      <option value="completed">completed</option>
                      <option value="On-hold">On</option>
                    </select>
                  </div>
                  <div className="ijk"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="add">
            <label htmlFor="alll" className="selecte">
          
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
