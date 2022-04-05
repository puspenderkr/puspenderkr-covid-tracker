import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header({ currentUser, myStorage, setcurrentUser }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    myStorage.removeItem("user");
    setcurrentUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          {currentUser ? (
            <button className="logout" onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <div className="buttons">
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/register">
                <button className="register">Register</button>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}
