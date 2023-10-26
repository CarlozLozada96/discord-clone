import React from 'react';
import {auth, provider} from "./firebase";
import "./Login.css";
import{ Button } from "@material-ui/core";
function Login() {
 const signIn =() =>{
    //do clever google login
    auth.signInWithPopup(provider).catch((error ) => alert(error.message));
 };

  return( 
     <div className="login">
      <div className="login__logo">
        <img src ="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png" alt=""/>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
 
  );
}

export default Login
