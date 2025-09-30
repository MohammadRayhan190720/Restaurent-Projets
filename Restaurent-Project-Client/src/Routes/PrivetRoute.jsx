import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-ring loading-xl"></span>;

  }

  if(user){
    return children;
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;