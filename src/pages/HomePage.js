import React, { useState } from "react";
import "../assets/css/HomePage.css";

const HomePage = () => {
  const [onActionPopUp, setOnActionPopUp] = useState(false);
  const handleActionPop = () => {
    setOnActionPopUp(!onActionPopUp);
  };

  const myComponentStyle = onActionPopUp
    ? "post-actions show-popup"
    : "post-actions";
  return (
    <main className="main">
      <section className="main__nav-section">
        <nav className="main__nav">
          <ul>
            <li>Posts</li>
            <li>Your Posts</li>
            <li>Liked Posts</li>
          </ul>
        </nav>
      </section>
      <section className="main__content-section">
        <div className="main__content">
          <div className="post-card">
            <div className="post-card__header">
              <div className="post-card__user-details">
                <img
                  className="profile-image profile-image--inlide-block"
                  src="http://uitheme.net/sociala/images/t-10.jpg"
                  alt="profile picture"
                />
                <span>
                  <h4 className="user-name">Surfiya Zakir</h4>
                  <p className="post-creation-date">3 hour ago</p>
                </span>
              </div>
              <div
                className="post-card__more-options"
                onClick={handleActionPop}
              >
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
              <div className={myComponentStyle}>
                <div className="post-action">
                  <i
                    className="fa fa-pencil-square-o update-icon"
                    aria-hidden="true"
                  ></i>
                  <p>update</p>
                </div>
                <div className="post-action">
                  <i className="fa fa-trash delete-icon" aria-hidden="true"></i>
                  <p>delete</p>
                </div>
              </div>
            </div>
            <p className="post-card__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            </p>
            <div className="post-card__footer">
              <div className="post-card__likes">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <h5>2.5 Likes</h5>
              </div>
            </div>
          </div>
          <div className="post-card">
            <div className="post-card__header">
              <div className="post-card__user-details">
                <img
                  className="profile-image profile-image--inlide-block"
                  src="http://uitheme.net/sociala/images/t-10.jpg"
                  alt="profile picture"
                />
                <span>
                  <h4 className="user-name">Surfiya Zakir</h4>
                  <p className="post-creation-date">3 hour ago</p>
                </span>
              </div>
              <div className="post-card__more-options">
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
            </div>
            <p className="post-card__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            </p>
            <div className="post-card__footer">
              <div className="post-card__likes">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <h5>2.5 Likes</h5>
              </div>
            </div>
          </div>
        </div>
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
