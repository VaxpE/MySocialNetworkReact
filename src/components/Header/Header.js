
import  classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.page__header}>
      <div className={classes.header__logo}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/MTG_%28PW%29.svg "className={classes.logo}></img>
      </div>
    </div>
  );
}

export default Header;
    