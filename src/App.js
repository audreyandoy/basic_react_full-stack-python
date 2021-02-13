import './App.css';
import React, { useReducer, useState } from "react";
import UserList from './components/UserList.js';
import Login from "./components/Login";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Logout from "./components/Logout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pikachu from "./images/shocked-pikachu.png";


// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

function App() {
  const [user, setUser] = useState();
  const [isOn, toggleIsOn] = useToggle();

  return (
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              <div class="greeting-container">
                <h1 class="greeting"> 
                  CSS ANIMATIONS
                </h1>
                <svg class="heart" viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                  </svg>
              </div>
            </Col>
          </Row>
        </Jumbotron>

        <Navbar>
          <Navbar.Brand>
            {user ?<UserList user={user} />  : "Hello" }
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {user ? <Logout path="/" setUser={setUser} />  : <Login path="/" setUser={setUser} /> }
              
            </Navbar.Text>          
          </Navbar.Collapse>
        </Navbar>
        <Row sm={12} className="justify-content-md-center">
            {/* <ExampleToast>
              We now have Toasts
              <span role="img" aria-label="tada">
                🎉
              </span>
            </ExampleToast> */}
        </Row>
        <Row>
		        <img src={pikachu} alt="pikachu" />
        </Row>
        <Row>
          <button onClick={toggleIsOn} id="color" class="transform">
            Turn {isOn ? 'Off': 'On'}
          </button>
        </Row>

      </Container>
  );
}

function useToggle(initialValue = false){
  // Returns the tuple [state, dispatch]
  // Normally with useReducer you pass a value to dispatch to indicate what action to
  // take on the state, but in this case there's only one action.
  return useReducer((state) => !state, initialValue);
}


export default App;
