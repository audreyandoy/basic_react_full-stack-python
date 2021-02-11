import './App.css';
import React, { useState } from "react";
// import axios from "axios";
import UserList from './components/UserList.js';
import Login from "./components/Login";
import Logout from "./components/Logout";

// const api_url = "http://localhost:5000/api/user";

function App() {
  // const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   axios.get(api_url)
  //   .then((response) => {
  //     const userList = response.data;
  //     setUserData(userList);
  //   })
  //   .catch((error) => {
  //     const message=`User list did not load. ${error.message}.`;
  //     console.log(message);
  //   })
  // }, []);

  // function Login() {
  //   const onSuccess = (res) => {
  //     console.log('[Login Success] currentUser', res.profileObj);
  //   };

  //   const onFailure = (res) => {
  //     console.log('[Login Failed] res:', res);
  //   }
  // }

  return (
      <section>
        <div>
          <Login path="/" setUser={setUser} /> 
          <Logout />
          <UserList user={user}>
          </UserList>
        </div>
      </section>
  );
}

export default App;
