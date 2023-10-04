import React from "react";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import UserProfilePage from "../pages/UserProfilePage";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <UserProfilePage />
    </>
  );
};

export default Layout;
