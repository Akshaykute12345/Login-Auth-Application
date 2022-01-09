import React, { useContext } from 'react';
import ErrorPage from '../pages/ErrorPage';
import { AuthContext } from './../context/AuthContext';

export const PagerouteHoc = (Component) => {
  return (props) => {
    const auth = useContext(AuthContext);
    return (
      <div>{auth.isUserLogin ? <Component {...props} /> : <ErrorPage />}</div>
    );
  };
};
