
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator } from '../../../redux/state'
import { updateNewPostText } from '../../../redux/state'

function MyPosts(props) {

  let postItems = props.profileData.postData.map((el) => (<Post text={el.post} counter={el.counter} />))

  let textarea = React.createRef();
  
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let rewriteTextBox = () =>
  {
    let newText = textarea.current.value;
    props.dispatch(updateNewPostText(newText));
  }

  return (
    <div className={classes.profile__posts}>
      <div className={classes.posts__header}>
        <h2>My Posts</h2>
      </div>
      <div className={classes.addPost}>
        <textarea className={classes.profile__textbox} ref={textarea} onChange={rewriteTextBox} value={props.profileData.newPostText}></textarea>
        <button className={classes.button} onClick ={addPost}>Add Post</button>
      </div>
      <div className={classes.posts__list}>
        {postItems}
      </div>
    </div>
  );
}

export default MyPosts;
