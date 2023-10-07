import React, { useEffect, useState } from "react";
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

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostsFromServer = () => {
    axios
      .get(`${MAIN_DOMAIN}/posts`, getHTTPHeaderWithToken())
      .then((resp) => {
        setIsLoading(true);
        if (resp.status === 200) {
          setPosts(resp.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => setIsLoading(false));
  };

  const deletePost = (id) => {
    const filtered_posts = posts.filter((post) => post.id !== id);
    setPosts(filtered_posts);
  };

  const addPost = (new_post) => {
    console.log(new_post);
    const new_posts = [new_post, ...posts];
    setPosts(new_posts);
  };

  useEffect(() => {
    fetchPostsFromServer();
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
      <PostsContext.Provider
        value={{ posts: posts, deletePost: deletePost, addPost: addPost }}
      >
        <section className="main__content-section">
          {/* Posts are displayed here */}

          {!isLoading ? (
            <Outlet />
          ) : (
            <div className="spinner-loader">{getSendingDataSpinner()}</div>
          )}
        </section>
        <PostForm />
      </PostsContext.Provider>
    </main>
  );
};

export default HomePage;
