import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className ={classes.page__navbar}>
      <nav className={classes.nav__block}>
        <ul className={classes.nav__list}>
        <li className={classes.Item}><a href = '#'>Profile</a></li>
        <li className={classes.Item}><a href = '#'>Messages</a></li>
        <li className={classes.Item}><a href = '#'>News</a></li>
        <li className={classes.Item}><a href = '#'>Music</a></li>
        <li className={classes.Item}><a href = '#'>Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
    