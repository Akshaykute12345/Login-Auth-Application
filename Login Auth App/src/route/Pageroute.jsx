import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';
import User from './../pages/User';

const Pageroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
};

export default Pageroute;
