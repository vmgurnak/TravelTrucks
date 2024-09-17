import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './Menu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const Menu = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Menu;
