import React, { useState } from "react";
import "../assets/css/HomePage.css";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="main">
      <section className="main__nav-section">
        <nav className="main__nav">
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/user-posts">Your Posts</Link>
            </li>
            <li>
              <Link to="/user-liked-posts">Liked Posts</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="main__content-section">
        {/* Posts are displayed here */}
        <Outlet />
      </section>
      <section className="create-post-section">
        <div className="create-post-form">
          <div className="help-title">
            <h3>Leave us a Post??</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              focusable="false"
              viewBox="0 0 16 16"
              data-testid="Icon--dash"
              data-garden-id="buttons.icon"
              data-garden-version="8.13.0"
              theme="[object Object]"
              class="sc-bwzfXH hDrfMZ"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-strokeWidth="2"
                d="M3 8h10"
              ></path>
            </svg>
          </div>
          <div className="message">
            <label htmlFor="post">We are eager to see what you post?</label>
            <textarea rows="3" name="post"></textarea>
          </div>
          <button className="btn-send" type="submit">
            Send
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
