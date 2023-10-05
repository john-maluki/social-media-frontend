import React, { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import { Link, Outlet } from "react-router-dom";
import PostForm from "../components/Posts/PostForm";
import { MAIN_DOMAIN } from "../utils/constants";
import axios from "axios";
import { PostsContext } from "../contexts/PostContext";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostsFromServer = () => {
    axios.get(`${MAIN_DOMAIN}/posts`).then((resp) => {
      if (resp.status === 200) {
        setPosts(resp.data);
      }
    });
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
      <section className="main__content-section">
        {/* Posts are displayed here */}
        <PostsContext.Provider value={posts}>
          <Outlet />
        </PostsContext.Provider>
      </section>
      <PostForm />
    </main>
  );
};

export default HomePage;
