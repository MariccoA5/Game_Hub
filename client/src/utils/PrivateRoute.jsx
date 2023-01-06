import {Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children, ...rest }) => {
  

  
  return (
    auth.token ? <Outlet/> : <Navigate to='/' state={{from: location}} replace/>
  );
};
