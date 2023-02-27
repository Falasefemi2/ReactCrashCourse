import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import axios from "axios";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsFetching(true);
        const response = await axios.get("http://localhost:8080/posts");
        setPosts(response.data.posts);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.name} name={post.name} text={post.text} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet...</h2>
          <p>Start Writing...</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
