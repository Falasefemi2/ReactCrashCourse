import React from 'react'
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({id, name, text}) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
    <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
      </Link>
    </li>
  )
}

export default Post