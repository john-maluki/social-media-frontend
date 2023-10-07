import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { MAIN_DOMAIN } from "../../utils/constants";
import {
  getHTTPHeaderWithToken,
  getSendingDataSpinner,
} from "../../utils/functions";

const UserLikedPosts = () => {
  const [userLikedPost, setUserLikedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useContext(AuthContext);

  const fetchLikedPostFromServer = () => {
    setIsLoading(true);
    axios
      .get(
        `${MAIN_DOMAIN}/users/${authUser.id}/posts`,
        getHTTPHeaderWithToken()
      )
      .then((resp) => {
        if (resp.status !== 200) {
          setUserLikedPost(resp.data);
        }
      })
      .catch((err) => setIsLoading(false));
  };

  useEffect(() => {
    fetchLikedPostFromServer();
  }, []);

  const postList = userLikedPost.map((post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="main__content">
      {isLoading ? (
        postList.length !== 0 ? (
          postList
        ) : (
          <div className="no-data">No posts liked!</div>
        )
      ) : (
        <div className="spinner-loader">{getSendingDataSpinner()}</div>
      )}
    </div>
  );
};

export default UserLikedPosts;
