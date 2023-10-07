import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostContext";
import axios from "axios";
import { MAIN_DOMAIN } from "../../utils/constants";
import { getHTTPHeaderWithToken } from "../../utils/functions";
import { toast } from "react-toastify";

const Post = ({ post }) => {
  const [onActionPopUp, setOnActionPopUp] = useState(false);
  const handleActionPop = () => {
    setOnActionPopUp(!onActionPopUp);
  };

  const authUser = useContext(AuthContext);
  const posts = useContext(PostsContext);
  const myComponentStyle = onActionPopUp
    ? "post-actions show-popup"
    : "post-actions";

  const handlePostDelete = () => {
    handleActionPop();
    axios
      .delete(`${MAIN_DOMAIN}/posts/${post.id}`, getHTTPHeaderWithToken())
      .then((resp) => {
        if (resp.status === 204) {
          posts.deletePost(post.id);
          toast.success("Post deleted successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        toast.error("Error deleting post!", {
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

  return (
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__user-details">
          <img
            className="profile-image profile-image--inlide-block"
            src={post.user.profile_picture}
            alt="profile picture"
          />
          <span>
            <h4 className="user-name">
              {post.user.first_name} {post.user.last_name}
            </h4>
            <p className="post-creation-date">
              {new Date(post.created_at).toDateString()}
            </p>
          </span>
        </div>
        {authUser.id === post.user.id ? (
          <div className="post-card__more-options" onClick={handleActionPop}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        ) : null}
        <div className={myComponentStyle} onMouseLeave={handleActionPop}>
          <div className="post-action" onClick={handleActionPop}>
            <i
              className="fa fa-pencil-square-o update-icon"
              aria-hidden="true"
            ></i>
            <p>update</p>
          </div>
          <div className="post-action" onClick={handlePostDelete}>
            <i className="fa fa-trash delete-icon" aria-hidden="true"></i>
            <p>delete</p>
          </div>
        </div>
      </div>
      <p className="post-card__body">{post?.description}</p>
      <div className="post-card__footer">
        <div className="post-card__likes">
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <h5>{post.likes} Likes</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
