import React from 'react';
import GoogleButton from '../Components/Google.login';
import '../Styles/login.style.css';
import Navbar from '../Components/Navbar.component';

function Login(){
  return(
    <>
    <Navbar />
    <div className="login-container">
      <div className="container-small">
        <h1 className="login-title">Glad to See You Again !</h1>
        <GoogleButton />
      </div>
    </div>
    </>
  )
}

export default Login