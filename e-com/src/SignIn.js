// Signin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      await axios.post('http://localhost:5000/api/signin', { username, password });
      console.log('Signin successful!');
      navigate('/main');
      // Redirect or perform other actions upon successful signin
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <div>
      <h2>Signin Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
};

export default SignIn;
