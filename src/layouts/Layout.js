import React from "react";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const Layout = () => {
  return (
    <>
      <Header />
      <HomePage />
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
    </>
  );
};

export default Layout;
