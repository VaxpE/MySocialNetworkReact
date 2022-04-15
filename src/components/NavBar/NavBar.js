import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

function NavBar() {
  const activeCheck = (navData) => navData.isActive ? classes.active : classes.link;

  return (
    <div className ={classes.page__navbar}>
      <nav className={classes.nav__block}>
        <ul className={classes.nav__list}>
        <NavLink className={activeCheck} to = '/profile'><li className={classes.item}>Профиль</li></NavLink>
        <NavLink className={activeCheck} to = '/dialogs'><li className={classes.item}>Сообщения</li></NavLink>
        <NavLink className={activeCheck} to = '/news'><li className={classes.item}>Новости</li></NavLink>
        <NavLink className={activeCheck} to = '/music'><li className={classes.item}>Музыка</li></NavLink>
        <NavLink className={activeCheck} to = '/settings'><li className={classes.item}>Настройки</li></NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
    