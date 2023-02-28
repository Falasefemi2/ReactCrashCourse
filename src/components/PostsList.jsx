import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
 const posts = useLoaderData();

  return (
    <>

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.name} id={post.id} name={post.name} text={post.text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet...</h2>
          <p>Start Writing...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
