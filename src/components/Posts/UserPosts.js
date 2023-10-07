import React, { useContext } from "react";
import Post from "./Post";
import { PostsContext } from "../../contexts/PostContext";
import { AuthContext } from "../../contexts/AuthContext";

const UserPosts = () => {
  const authUser = useContext(AuthContext);
  const posts = useContext(PostsContext);
  const user_posts = posts.posts.filter((post) => post.user.id === authUser.id);
  const postList = user_posts.map((post) => <Post key={post.id} post={post} />);

  return (
    <div className="main__content">
      {postList.length !== 0 ? (
        postList
      ) : (
        <div className="no-data">No posts</div>
      )}
    </div>
  );
};

export default UserPosts;
