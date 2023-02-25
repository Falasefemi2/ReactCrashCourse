import React, { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existinPosts) => [postData, ...existinPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.name} name={post.name} text={post.text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && <div style={{ textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet...</h2>
        <p>Start Writing...</p>
      </div> }
    </>
  );
};

export default PostsList;
