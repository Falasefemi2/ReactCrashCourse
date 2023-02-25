import React, { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredbody, setEnteredBody] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      name: enteredbody,
      text: enteredText,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={textChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form> 
  );
};

export default NewPost;
