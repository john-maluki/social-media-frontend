import React, { useContext } from "react";
import Post from "./Post";
import { PostsContext } from "../../contexts/PostContext";
import { SearchPostStringContext } from "../../contexts/SearchStringPostContext";

const Posts = () => {
  const posts = useContext(PostsContext);
  const postSearchString = useContext(SearchPostStringContext);
  const filteredPosts = posts.posts.filter((post) =>
    `${post.user.first_name} ${post.user.last_name}`
      .toLowerCase()
      .includes(postSearchString.toLowerCase())
  );
  const postList = filteredPosts.map((post) => (
    <Post key={post.id} post={post} />
  ));

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

export default Posts;
