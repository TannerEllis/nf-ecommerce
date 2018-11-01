import React from 'react';
import './Auth.css'
import keyLogo from './nfkeyslogo.jpg';

export default function Login() {

    function Login(){
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let redirectUri =  encodeURIComponent(`${window.location.origin}/auth/callback`);

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }

    return (
        <div className="login-container"> 
         <div className='title'> <h1>NFREALMUSIC</h1></div>
        <button className='login' onClick={ Login }> Enter <img className='buttonLogo' src={keyLogo} alt=""/></button>
        </div>        
    );
}