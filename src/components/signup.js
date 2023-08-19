import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { localBackendUrl } from "../utility";
import "./form.css";

function SignUp({ handleLogin }) {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passworderror, setPasswordError] = useState(false);

  const signup = async (firstname, lastname, username, email, password) => {
    await fetch(`${localBackendUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmpassword === password){
    signup(firstname, lastname, username, email, password);
    }
    else {
      setPasswordError(true)
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center text-xl">Sign up Form</h2>
        <div className="input-details">
          <input
            id="firstname"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
            placeholder="Firstname"
            required
          />
        </div>
        <div className="input-details">
          <input
            id="lastname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            placeholder="Lastname"
            required
          />
        </div>
        <div className="input-details">
          <input
            id="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            placeholder="Username"
            required
          />
        </div>
        <div className="input-details">
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div className="input-details">
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="input-details">
          <input
            id="confirmpassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
            placeholder="confirm password"
            type="password"
            required
          />
        </div>
        <button className="form-submit-button" type="submit">
          Submit
        </button>
        <p className={`mt-2 text-center text-red-500 ${!passworderror? 'hidden' : ''}`}>kindly confirm the password</p>
        
      </form>
    </div>
  );
}

export default SignUp;
