import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submitForm = () => {
    localStorage.setItem('userLoginData', JSON.stringify({username, password}));
    history.push('/');
  }
  return (
    <form onSubmit={submitForm}>
      <h3>Login</h3>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      </div>
      <input type="submit" onClick={submitForm} />
    </form>
  );
};

export default Login;
