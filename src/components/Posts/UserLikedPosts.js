import React, { useContext } from "react";
import Post from "./Post";
import { AuthContext } from "../../contexts/AuthContext";
import { PostsContext } from "../../contexts/PostContext";

const UserLikedPosts = () => {
  const authUser = useContext(AuthContext);
  const posts = useContext(PostsContext);
  const user_posts = posts.posts.filter((post) => post.user.id === authUser.id);
  const postList = user_posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <div className="main__content">
      {postList ? postList : "No post available"}
    </div>
  );
};

export default UserLikedPosts;
