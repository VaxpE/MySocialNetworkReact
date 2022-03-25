import classes from './Post.module.css'

function Post(props) {
  {console.log(props.counter);}
  return ( 
            <div className={classes.posts__item}>
              {props.text}
              <div className={classes.item__likes}>Like {props.counter}</div>
              </div>   
  );
}
export default Post;
