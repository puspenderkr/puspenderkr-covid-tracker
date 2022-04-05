import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [success, setsuccess] = useState(false);
  const [failure, setfailure] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/api/users", newUser);
      setsuccess(true);
      setfailure(false);
    } catch (err) {
      setfailure(true);
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>SignUp</h3>
              <p>Please enter your credentials to register.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              value={name}
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              ref={emailRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              ref={passwordRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>SignUp</button>

            {success && (
              <span className="success">Successfull! You can login now!</span>
            )}

            {failure && <span className="failure">Something went wrong!</span>}

            <p className="message">
              Already have account ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
