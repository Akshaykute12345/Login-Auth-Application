import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import { UserContext } from './../../context/UserContext';

const Header = () => {
  const auth = useContext(AuthContext);
  const user = useContext(UserContext);
  return (
    <>
      <div>
        <Navbar
          style={{
            padding: '10px',
            borderRadius: '12px',
          }}
          expand="lg"
          variant=""
          bg="warning"
        >
          <Container>
            <Link to="/home">
              <Button variant="success">Home</Button>
            </Link>
            {auth.isUserLogin && (
              <Button variant="danger" onClick={auth.logoutHandler}>
                Logout
              </Button>
            )}
            {!auth.isUserLogin && (
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
            )}

            <Link to="/user">
              <Button variant="info">User</Button>
            </Link>
          </Container>
        </Navbar>
      </div>
      <hr />
      {auth.isUserLogin && (
        <div>
          <h2 style={{ color: 'orange', textShadow: '2px 2px 4px yellow' }}>
            Hi, {user.userData.name} !!
          </h2>
        </div>
      )}
      {!auth.isUserLogin && (
        <div>
          <h2 style={{ color: 'red', textShadow: '2px 2px 4px yellow' }}>
            Hello Guest !!
          </h2>
        </div>
      )}
    </>
  );
};

export default Header;
