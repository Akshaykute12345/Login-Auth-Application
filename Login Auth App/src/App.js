import React from 'react';
import './style.css';
import Header from './components/Header/Header';
import Pageroute from './route/Pageroute';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import UserContextProvider from './context/UserContext';

const App = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className="div">
          <Router>
            <Header />
            <hr /> <br />
            <Pageroute />
          </Router>
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default App;
