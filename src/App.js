import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbarr from "./sections/Navbar";
import HomeNavbarr from "./sections/HomeNavbarr"
import Auth from "./auth/Auth";
import HomePage from "./sections/Home";
import Logout from "./components/Logout";
import About from "./sections/About";
import Donation from "./sections/Donation";
import ContactUs from "./sections/ContactUs";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  },[]);

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  // let pageContainerStyle = {position: "fixed", left: "350px", right: "0px", height: "100%", overflow: "auto"};

  const protectedViews = () => {
    return sessionToken ? (
      <HomePage token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  const whichNavbar = () => {
    return sessionToken ? (
      <Navbarr setSession={setSessionToken} />
    ) : (
      <HomeNavbarr updateToken={updateToken} />
    );
  };
  return (
    <div className="App">
      {whichNavbar()}
      {protectedViews()}
      <br />
    </div>
  );
}

export default App;


