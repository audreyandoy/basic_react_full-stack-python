import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from './components/UserList.js';

const api_url = "http://localhost:5000/api/user";


function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(api_url)
    .then((response) => {
      const userList = response.data;
      setUserData(userList);
    })
    .catch((error) => {
      const message=`User list did not load. ${error.message}.`;
      console.log(message);
    })
  }, []);

  return (
    <div className="App">
      <section>
        <div>
          <UserList users={userData}>
          </UserList>
        </div>
      </section>

    </div>
  );
}

export default App;
