import React, { useContext, useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import { Link, Outlet } from "react-router-dom";
import PostForm from "../components/Posts/PostForm";
import { MAIN_DOMAIN } from "../utils/constants";
import axios from "axios";
import { PostsContext } from "../contexts/PostContext";
import {
  getHTTPHeaderWithToken,
  getSendingDataSpinner,
} from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [userLikedPost, setUserLikedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState({
    description: "",
  });
  const authUser = useContext(AuthContext);

  const fetchLikedPostFromServer = () => {
    setIsLoading(true);
    axios
      .get(
        `${MAIN_DOMAIN}/users/${authUser.id}/posts`,
        getHTTPHeaderWithToken()
      )
      .then((resp) => {
        if (resp.status === 200) {
          setUserLikedPost(resp.data);
        }
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  };

  const fetchPostsFromServer = () => {
    setIsLoading(true);
    axios.get(`${MAIN_DOMAIN}/posts`, getHTTPHeaderWithToken()).then((resp) => {
      if (resp.status === 200) {
        setPosts(resp.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };

  const deletePost = (id) => {
    const filtered_posts = posts.filter((post) => post.id !== id);
    if (userLikedPost.find((post) => post.id === id)) {
      deleteuserLikePost(id);
    }
    setPosts(filtered_posts);
    setPostToUpdate({
      description: "",
    });
  };

  const deleteuserLikePost = (id) => {
    const filtered_posts = userLikedPost.filter((post) => post.id !== id);
    setUserLikedPost(filtered_posts);
  };

  const addPost = (new_post) => {
    const new_posts = [new_post, ...posts];
    setPosts(new_posts);
  };

  const updatePost = (updated_post) => {
    const new_posts = posts.map((post) =>
      post.id === updated_post.id ? updated_post : post
    );
    if (userLikedPost.find((post) => post.id === updated_post.id)) {
      updateUserLikedPost(updated_post);
    }
    setPosts(new_posts);
    setPostToUpdate({
      description: "",
    });
  };

  const updateUserLikedPost = (updated_post) => {
    const new_liked_posts = userLikedPost.map((post) =>
      post.id === updated_post.id ? updated_post : post
    );
    setUserLikedPost(new_liked_posts);
  };

  const getPostToUpdate = (post) => {
    console.log(post);
    setPostToUpdate(post);
  };

  const likePost = (post) => {
    updatePost(post);
    const new_liked_posts = [post, ...userLikedPost];
    setUserLikedPost(new_liked_posts);
  };

  const unLikePost = (post) => {
    updatePost(post);
    const filtered_liked_posts = userLikedPost.filter((p) => p.id !== post.id);
    setUserLikedPost(filtered_liked_posts);
  };

  useEffect(() => {
    fetchPostsFromServer();
    fetchLikedPostFromServer();
  }, []);
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

      {!isLoading ? (
        <PostsContext.Provider
          value={{
            posts: posts,
            userLikedPost: userLikedPost,
            deletePost: deletePost,
            addPost: addPost,
            updatePost: updatePost,
            getPostToUpdate: getPostToUpdate,
            likePost: likePost,
            unLikePost: unLikePost,
          }}
        >
          <section className="main__content-section">
            {/* Posts are displayed here */}
            <Outlet />
          </section>
          <PostForm postToUpdate={postToUpdate} />
        </PostsContext.Provider>
      ) : (
        <div className="spinner-loader">{getSendingDataSpinner()}</div>
      )}
    </main>
  );
};

export default HomePage;
