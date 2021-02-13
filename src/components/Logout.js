import React from "react";
import { GoogleLogout } from 'react-google-login';
import { navigate } from "@reach/router";


const clientId = '415751135697-3pkh803j85i6gpth64lnbjc99i1bevbk.apps.googleusercontent.com'


const Logout = ({ setUser }) => {
    const onSuccess = (res) => {
      alert('Logout made successfully');
      console.log("logged out")
      setUser("")
      navigate("/");
    };

    return (
        <div>
            <GoogleLogout path="/"
                    clientId={clientId}
                    buttonText = "Logout"
                    onLogoutSuccess={onSuccess}
                    setUser={setUser}
                    />
            
        </div>
      
    );
  }

export default Logout;