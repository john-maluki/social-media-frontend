import React, { useState } from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const Header = ({ authUser, logoutFunc }) => {
  const [onUserIconClick, setonUserIconClick] = useState(false);
  const onUserProfileClick = () => {
    setonUserIconClick(!onUserIconClick);
  };

  const myComponentStyle = onUserIconClick
    ? "header__user-profile-popup show-popup"
    : "header__user-profile-popup";

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const handleLogout = () => {
    onUserProfileClick();
    logoutFunc();
  };

  return (
    <header className="header header--fixed">
      <div className="header__log-and-search">
        <div className="logo">
          <span>
            <Link to="/">CON-NECT</Link>
          </span>
        </div>
        <input
          id="header__search"
          className="header__search"
          type="search"
          placeholder="Search posts by username"
        />
      </div>
      {authUser ? (
        <div className="header__log-in">
          <h4>{authUser?.first_name}</h4>
        </div>
      ) : (
        <div className="header__log-in">
          <Link to="/sign-up">Create Account</Link>
        </div>
      )}
      <div className="header__profile-menu" onClick={onUserProfileClick}>
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div className={myComponentStyle} onMouseLeave={onUserProfileClick}>
        <div className="header__user-details">
          <img
            className="profile-image"
            src="http://uitheme.net/sociala/images/t-10.jpg"
          />
          <h4>
            {authUser?.first_name} {authUser?.last_name}
          </h4>
        </div>
        <div className="header-items">
          <div className="header-item">
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <p>
              {" "}
              <Link
                to="/user-profile"
                style={linkStyle}
                onClick={onUserProfileClick}
              >
                Your Profile
              </Link>
            </p>
          </div>
          <div className="header-item" onClick={handleLogout}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
