import './App.css';
import React, { useState } from "react";
import UserList from './components/UserList.js';
import Login from "./components/Login";
import Logout from "./components/Logout";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; 


function App() {
  const [user, setUser] = useState();

  console.log(user);

  return (
      <section>
        <div>
          <Login path="/" setUser={setUser} /> 
          <Logout />
          <UserList path="/" user={user}>
          </UserList>
        </div>
      </section>
  );
}

export default App;
