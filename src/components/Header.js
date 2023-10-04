import React from "react";
import "../assets/css/Header.css";

const Header = () => {
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
      <div id="header__app" className="header__app" title="Create new post">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>
      <div className="header__log-in">
        <a href="#">Create Account</a>
      </div>
      <div className="header__profile-menu">
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Header;
