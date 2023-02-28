import React from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  return (
    <>
    <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default Posts;


export async function loader() {
  const response = await axios.get("http://localhost:8080/posts");
  return response.data.posts;
}
