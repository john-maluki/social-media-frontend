import React, { useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const [onUserIconClick, setonUserIconClick] = useState(false);
  const onUserProfileClick = () => {
    setonUserIconClick(!onUserIconClick);
  };

  const myComponentStyle = onUserIconClick
    ? "header__user-profile-popup show-popup"
    : "header__user-profile-popup";

  return (
    <header className="header header--fixed">
      <div className="header__log-and-search">
        <div className="logo">
          <span>CON-NECT</span>
        </div>
        <input
          id="header__search"
          className="header__search"
          type="search"
          placeholder="Search posts by username"
        />
      </div>
      <div className="header__log-in">
        <a href="#">Create Account</a>
      </div>
      <div className="header__profile-menu" onClick={onUserProfileClick}>
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className={myComponentStyle}>
        <div className="header__user-details">
          <img
            className="profile-image"
            src="http://uitheme.net/sociala/images/t-10.jpg"
          />
          <h4>John Maluki</h4>
        </div>
        <div className="header-items">
          <div className="header-item">
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <p>Your Profile</p>
          </div>
          <div className="header-item">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
