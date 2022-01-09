import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './LoginForm.module.css';
import { AuthContext } from './../../context/AuthContext';
import { UserContext } from './../../context/UserContext';

const LoginForm = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(null);

  const auth = useContext(AuthContext);
  const user = useContext(UserContext);

  return (
    <>
      {auth.isUserLogin && (
        <h4 style={{ color: 'green' }}>
          Hi {user.userData.name} You Logged-In Successfully !!{' '}
        </h4>
      )}

      {!auth.isUserLogin && (
        <>
          <h2 style={{ color: 'black' }}> Login Form </h2>
          <div className={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> User-Name </Form.Label>
              <Form.Control
                type="text"
                value={userName}
                placeholder="Enter UserName"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                props.doLogin(userName, password);
                setUserName('');
                setPassword('');
              }}
              disabled={props.loading}
            >
              Login
            </Button>

            {props.loginFailed && (
              <h4 style={{ color: 'red' }}> Login Failed ...Try Again </h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;
