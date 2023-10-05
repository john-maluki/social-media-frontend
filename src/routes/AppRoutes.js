import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Posts from "../components/Posts/Posts";
import UserPosts from "../components/Posts/UserPosts";
import UserLikedPosts from "../components/Posts/UserLikedPosts";
import UserProfilePage from "../pages/UserProfilePage";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Posts />} />
        <Route path="user-posts" element={<UserPosts />} />
        <Route path="user-liked-posts" element={<UserLikedPosts />} />
      </Route>
      <Route path="/user-profile" element={<UserProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
