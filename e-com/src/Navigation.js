import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navigation.css";
const Navigation = () => {
    const nav = useNavigate();
    function handleSignIn(){
        nav('/signin')
    }
    function handleSignUp(){
        nav('/signup')
    }
  return (
    <div className="landing-container">
      <h1>Welcome to Your Store</h1>
      <div className="button-container">
        <button className="landing-button" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="landing-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navigation;
