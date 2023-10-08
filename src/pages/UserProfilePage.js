import React, { useContext, useEffect, useState } from "react";
import "../assets/css/SignUpPage.css";
import UserProfileForm from "../components/UserProfileForm";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { MAIN_DOMAIN } from "../utils/constants";
import { toast } from "react-toastify";
import { getHTTPHeaderWithToken } from "../utils/functions";

const UserProfilePage = () => {
  const authUser = useContext(AuthContext);
  const [userProfileData, setUserProfileData] = useState({
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
  });
  const fetchUserProfileDataFromServer = () => {
    axios
      .get(`${MAIN_DOMAIN}/users/${authUser.id}`, getHTTPHeaderWithToken())
      .then((resp) => setUserProfileData(resp.data))
      .catch((err) => {
        toast.error("Could not fetch frofile data", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  useEffect(() => fetchUserProfileDataFromServer(), []);
  return (
    <div className="signup-page">
      <section className="form-section">
        <h2 className="signup-title">Your Profile</h2>
        <UserProfileForm userProfileData={userProfileData} />
      </section>
    </div>
  );
};

export default UserProfilePage;
