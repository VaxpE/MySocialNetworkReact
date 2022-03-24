import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
        <div className={classes.profile__posts}>
         <div className = {classes.posts__header}> <h2 >My Post</h2></div>
         <textarea></textarea>
         <button>Add Post</button>
          <div className={classes.posts__list}>
            <Post/>
          </div>
        </div>
  );
}

export default MyPosts;
