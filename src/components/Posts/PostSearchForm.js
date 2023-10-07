import React from "react";

const PostSearchForm = ({ getPostSearchString }) => {
  return (
    <input
      id="header__search"
      className="header__search"
      type="search"
      placeholder="Search posts by username"
      onChange={(e) => getPostSearchString(e.target.value)}
    />
  );
};

export default PostSearchForm;
