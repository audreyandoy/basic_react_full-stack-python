import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { GoogleLogin } from 'react-google-login';

const clientId = '415751135697-3pkh803j85i6gpth64lnbjc99i1bevbk.apps.googleusercontent.com'

const Login = ({ setUser }) => {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser', res.profileObj);
      const data = {
          id_token: res.getAuthResponse().id_token,
          last_name: res.profileObj.familyName,
          first_name: res.profileObj.givenName,
          email: res.profileObj.email
        }
      console.log(res);
      axios.post(
            'http://localhost:5000/login', 
            {
                data: data
            })
            .then((res) => {
                setUser(res.data["data"]);
                console.log("hello");
                console.log(res.data);
                navigate(res.data["route"]);
            }, (error) => {
                console.log(error);
            });

        refreshTokenSetup(res);
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