import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
