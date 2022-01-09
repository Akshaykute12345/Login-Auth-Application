import React, { useState, useContext } from 'react';
import LoginForm from './../components/LoginForm/LoginForm';
import { AuthContext } from './../context/AuthContext';
import { UserContext } from './../context/UserContext';

const Login = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginFail, setIsLoginFail] = useState(false);

  const doLoginHandler = (userName, password) => {
    setIsLoading(true);
    if (userName === 'Akshay' && password === '7218440511') {
      setTimeout(() => {
        setIsLoading(false);
        setIsLoginFail(false);
        console.log(userName, password);
        user.setUserDataHandler({ name: userName });
        auth.loginHandler();
      }, 1500);
    } else {
      setIsLoginFail(true);
      setIsLoading(false);
      auth.logoutHandler();
    }
  };
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '50px' }}>
      
      <LoginForm
        loginFailed={isLoginFail}
        loading={isLoading}
        doLogin={doLoginHandler}
      />
    </div>
  );
};

export default Login;
