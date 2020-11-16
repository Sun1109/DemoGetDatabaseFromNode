import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const result = await axios("http://localhost:1000/getUser");
    setUsers(result.data);
  }, []);
  console.log(users);
    return (
      <div className="App">
        <header className="App-header">
        <ul className="userList">
          {users.map(user => (
            <li key={user.id} className="cardUser">
              <div className="row">
                <div className="col">
                  {user.name}
                </div>
                <div className="col">
                  {user.age}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {user.country}
                </div>
                <div className="col">
                  {user.gender}
                </div>
              </div>
            </li>
          ))}
        </ul>
        </header>
      </div>
    );
}
export default App;
