import React, { useState } from "react";

const Post = ({ post }) => {
  const [onActionPopUp, setOnActionPopUp] = useState(false);
  const handleActionPop = () => {
    setOnActionPopUp(!onActionPopUp);
  };

  const myComponentStyle = onActionPopUp
    ? "post-actions show-popup"
    : "post-actions";
  return (
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
        <div className="post-card__more-options" onClick={handleActionPop}>
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
        <div className={myComponentStyle} onMouseLeave={handleActionPop}>
          <div className="post-action" onClick={handleActionPop}>
            <i
              className="fa fa-pencil-square-o update-icon"
              aria-hidden="true"
            ></i>
            <p>update</p>
          </div>
          <div className="post-action" onClick={handleActionPop}>
            <i className="fa fa-trash delete-icon" aria-hidden="true"></i>
            <p>delete</p>
          </div>
        </div>
      </div>
      <p className="post-card__body">{post?.description}</p>
      <div className="post-card__footer">
        <div className="post-card__likes">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h5>2.5 Likes</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
