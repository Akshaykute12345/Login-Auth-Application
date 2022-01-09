import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 5000);
  }, []);

  return (
    <>
      <div>
        Use this <Link to="/login">link</Link> to redirect into login page
      </div>

      <div>You will Auto-redirect to the login page after 5 seconds !!</div>
    </>
  );
};

export default ErrorPage;
