import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';

import clsx from 'clsx';

import css from './MenuMobile.module.css';

const MenuMobile = ({ closeMenu, isOpenMenu }) => {
  return (
    <div className={clsx(css.menuMobile, isOpenMenu && css.menuMobileOpen)}>
      <Link className={css.logoLink} to="/">
        <SvgIcon addClass={css.logo} icon={ICONS.logo} />
      </Link>
      <button className={css.btnBurgerClose} onClick={closeMenu}>
        <SvgIcon addClass={css.iconMenuClose} icon={ICONS.menuClose} />
      </button>
      <Menu />
    </div>
  );
};

export default MenuMobile;
