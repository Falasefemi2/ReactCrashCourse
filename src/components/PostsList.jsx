import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css"


const PostsList = () => {
  return (
    <ul className={classes.posts}>
        <Post name='Femi'text="React.js is awesome" />
        <Post name='Samuel'text="Vue.js is awesome" />
    </ul>
  );
};

export default PostsList;
