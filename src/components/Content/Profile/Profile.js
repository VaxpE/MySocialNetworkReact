import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'


function Profile() {
  return (
    <div className={classes.page__profile}>
      <div className={classes.profile}>
        <div className={classes.profile__background}><img src='https://i.icanvas.com/list-hero/modern-OLM12.jpg'></img></div>
        <div className={classes.profile__img}><img src='https://sun9-84.userapi.com/impf/noP2YUgHn5nYTnYjUdhn1iAtd2lkzqFCEyfqdg/daoSpCmlDlo.jpg?size=567x694&quality=96&sign=a193bb3814285efaf4ad7675f62a5d58&type=album'></img></div>
        <div className={classes.aboutMe}>
          <div className={classes.profile__name}>Vlad Zhilkin</div>
          <div className={classes.description}>Date of birth: 10 June City: Usolie-Sibirskoe Education: NSU'25</div>
        </div>
      </div>
        <MyPosts/>
      </div>
  );
}

export default Profile;
