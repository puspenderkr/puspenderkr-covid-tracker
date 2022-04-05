import React, { useState } from "react";
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Landing from "./containers/LandingPage/Landing";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

export default function Test() {
  const myStorage = window.localStorage;
  const [currentUser, setcurrentUser] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header
          currentUser={currentUser}
          setcurrentUser={setcurrentUser}
          myStorage={myStorage}
        />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route
            path="/login"
            element={
              <Login myStorage={myStorage} setcurrentUser={setcurrentUser} />
            }
          />
          <Route
            path="/register"
            element={<Register myStorage={myStorage} />}
          />
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
