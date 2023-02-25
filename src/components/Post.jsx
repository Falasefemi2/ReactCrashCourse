import React from 'react'
import classes from './Post.module.css';

const Post = ({name, text}) => {
  return (
    <div className={classes.post}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{text}</p>
    </div>
  )
}

export default Post