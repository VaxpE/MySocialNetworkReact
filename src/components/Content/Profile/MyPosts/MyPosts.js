import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  
  return (
        <div className={classes.profile__posts}>
         <div className = {classes.posts__header}> <h2 >My Posts</h2></div>
         <textarea className='profile__textbox'></textarea>
         <button>Add Post</button>
          <div className={classes.posts__list}>
            <Post text='How are you' counter = {Math.floor(Math.random()*(100-0)-0)}/>
            <Post text = 'I am well' counter = {Math.floor(Math.random()*(100-0)-0)}/>
            <Post text = '-rep AWP ublydok' counter = {Math.floor(Math.random()*(100-0)-0)}/>
          </div>  
        </div>
  );
}

export default MyPosts;
