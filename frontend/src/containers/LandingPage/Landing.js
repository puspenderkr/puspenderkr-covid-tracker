import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";
import pics from "./covid-19.png";

export default function Landing() {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     const userInfo = localStorage.getItem("userInfo");
  //     if (userInfo) {
  //       navigate("/home");
  //     }
  //   }, [navigate]);

  return (
    <div>
      <main className="main">
        <div className="image">
          <img src={pics} alt="Covid" />
        </div>
        <div className="main-text">
          <div className="title">
            <h1>Find Latest DATA of</h1>
            <h2>
              Covid-19{" "}
              <span>
                <i className="fas fa-paw"></i>
              </span>
            </h2>
            <h3>
              Wear A Mask <span>Be Safe</span>.
            </h3>
          </div>
          <button>
            <Link to="/register">Signup</Link>
          </button>
        </div>
        <div className="socials">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
        </div>
      </main>
    </div>
  );
}
