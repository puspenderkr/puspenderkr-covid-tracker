import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ myStorage, setcurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [failure, setfailure] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post("/api/users/login", user);
      myStorage.setItem("user", res.data.email);
      setcurrentUser(res.data.email);
      navigate("/home");
      setfailure(false);
    } catch (err) {
      setfailure(true);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>Login</h3>
              <p>Please enter your credentials to Login.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              value={email}
              ref={passwordRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              ref={emailRef}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button>Login</button>

            {failure && <span className="failure">Something went wrong!</span>}

            <p className="message">
              Do not have account ? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
