import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../redux/authentication/action";
import "./form.css";

function Login({ page }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password, setEmail, setPassword, navigate, page));
  };

  return (
    <div className="form-container flex flex-col">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl">Log in Form</h2>
        {/* <div style={{'display': 'none'}}>{trigger}</div> */}
        <div className="input-details">
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
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
        <button className="form-submit-button" type="submit">
          Submit
        </button>
      </form>
      <div className="flex mt-6 gap-3">
        <p>don't have an account?</p>
        <NavLink to="/signup" className="text-[#e4d804]">
          signup
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
