import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './Menu.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};
const Menu = ({ closeMenu }) => {
  return (
    <nav className={css.navList}>
      <NavLink className={buildLinkClass} to="/" onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog" onClick={closeMenu}>
        Catalog
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites" onClick={closeMenu}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Menu;
