import React from "react";
import "../assets/css/SignUpPage.css";
import { Link } from "react-router-dom";
import UserProfileForm from "../components/UserProfileForm";

const SignUpPage = () => {
  const userProfileData = {
    first_name: "",
    last_name: "",
    username: "",
    bio: "",
    profile_picture: "http://uitheme.net/sociala/images/t-10.jpg",
    email: "",
    password: "",
    gender: "",
    identification_card: "",
    date_of_birth: "",
    contact: "",
    confirm_password: "",
  };
  return (
    <div className="signup-page">
      <section className="form-section">
        <h2 className="signup-title">Create an account</h2>
        <UserProfileForm userProfileData={userProfileData} />
        <span className="signup-login">
          Do you have an account? <Link to="/"> Login</Link>{" "}
        </span>
      </section>
    </div>
  );
};

export default SignUpPage;
