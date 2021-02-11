import React from "react";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';

const clientId = '415751135697-3pkh803j85i6gpth64lnbjc99i1bevbk.apps.googleusercontent.com'
const api_url = "http://localhost:5000/api/users";

function Login() {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser', res.profileObj);

      refreshTokenSetup(res);

      axios.post('http://localhost:5000/login', 
      {
        'Access-Control-Allow-Origin': '*'
      },
      {
        firstName: 'Finn',
        lastName: 'Williams'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });


      }


   

    const onFailure = (res) => {
      console.log('[Login Failed] res:', res);
    }

    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 *60) * 1000;

        const refreshToken = async() => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 -5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);
            console.log('new auth Token', newAuthRes.id_token);
            setTimeout(refreshToken, refreshTiming);
        };

        setTimeout(refreshToken, refreshTiming);
    }

    return (
        <div>
            <GoogleLogin
                    clientId={clientId}
                    buttonText = "Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />
        </div>
      
    );
  }

export default Login;