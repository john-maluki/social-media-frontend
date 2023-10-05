import React from "react";
import "../assets/css/SignUpPage.css";

const UserProfilePage = () => {
  return (
    <div className="signup-page">
      <section className="form-section">
        <h2 className="signup-title">Your Profile</h2>
        <form className="signup-form">
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name" />
              <span className="error"></span>
            </div>
            <div className="form-control">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" id="last-name" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="username">UserName</label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="use your email"
              />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="M" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="F" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" id="country" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="profile-pic">Profile Pic</label>
              <input type="url" name="profile-pic" id="profile-pic" />
              <span></span>
            </div>
            <div className="form-control">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" name="dob" id="dob" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" name="contact" id="contact" />
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="bio">Bio</label>
              <textarea name="bio" id="bio"></textarea>
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Save Changes" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserProfilePage;
