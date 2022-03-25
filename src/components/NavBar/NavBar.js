import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className ={classes.page__navbar}>
      <nav className={classes.nav__block}>
        <ul className={classes.nav__list}>
        <li className={classes.item}><NavLink className={(navData) => (navData.isActive) ? classes.active : classes.link} to = '/profile'>Профиль</NavLink></li>
        <li className={classes.item}><NavLink className={(navData) => (navData.isActive ? classes.active :  classes.link)} to = '/dialogs'>Сообщения</NavLink></li>
        <li className={classes.item}><NavLink className={(navData) => (navData.isActive ? classes.active :  classes.link)} to = '/news'>Новости</NavLink></li>
        <li className={classes.item}><NavLink className={(navData) => (navData.isActive ? classes.active :  classes.link)} to = '/music'>Музыка</NavLink></li>
        <li className={classes.item}><NavLink className={(navData) => (navData.isActive ? classes.active : classes.link)} to = '/settings'>Настройки</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
    