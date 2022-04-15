import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props) {
 
  return (
    <div className={classes.page__profile}>
        <ProfileInfo />
        <MyPosts profileData={props.profileData} 
        dispatch = {props.dispatch}
        />
      </div>
  );
}

export default Profile;
