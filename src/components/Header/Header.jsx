import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { ICONS } from '../Constants/constants.js';

import css from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <Link className={css.logoLink} to="/">
        <svg className={css.logo}>
          <use href={ICONS.logo}></use>
        </svg>
      </Link>
      <nav className={css.navList}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
