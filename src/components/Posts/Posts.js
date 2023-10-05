import React, { useContext } from "react";
import Post from "./Post";
import { PostsContext } from "../../contexts/PostContext";

const Posts = () => {
  const posts = useContext(PostsContext);
  const postList = posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <div className="main__content">
      {postList ? postList : "No post available"}
    </div>
  );
};

export default Posts;
