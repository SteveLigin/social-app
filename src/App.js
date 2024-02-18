import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./components/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
