import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";
import SignInScreen from "../screens/SignIn/SignIn";

const Navigation = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
