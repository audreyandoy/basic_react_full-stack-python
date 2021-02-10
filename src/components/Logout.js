import React from "react";
import { GoogleLogout } from 'react-google-login';

const clientId = '415751135697-3pkh803j85i6gpth64lnbjc99i1bevbk.apps.googleusercontent.com'


function Logout() {
    const onSuccess = (res) => {
      alert('Logout made successfully');
      console.log("logged out")
    };

    return (
        <div>
            <GoogleLogout
                    clientId={clientId}
                    buttonText = "Logout"
                    onLogoutSuccess={onSuccess}
                    />
        </div>
      
    );
  }

export default Logout;