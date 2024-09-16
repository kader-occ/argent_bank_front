import React from "react";
import { Navigate } from "react-router-dom";
import UserService from "../services/UserService";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = UserService.isAuthenticated();
  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
