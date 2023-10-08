import React, { useContext } from "react";
import Post from "./Post";

import { PostsContext } from "../../contexts/PostContext";

const UserLikedPosts = () => {
  const postContext = useContext(PostsContext);

  const postList = postContext.userLikedPost.map((post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="main__content">
      {postList.length !== 0 ? (
        postList
      ) : (
        <div className="no-data">No posts liked!</div>
      )}
    </div>
  );
};

export default UserLikedPosts;
