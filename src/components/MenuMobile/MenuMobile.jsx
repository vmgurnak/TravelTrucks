import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Menu from '../Menu/Menu';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';
import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';

import css from './MenuMobile.module.css';

const MenuMobile = ({ closeMenu, isOpenMenu }) => {
  return (
    <div className={clsx(css.menuMobile, isOpenMenu && css.menuMobileOpen)}>
      <Link className={css.logoLink} to="/" onClick={closeMenu}>
        <SvgIcon addClass={css.logo} icon={ICONS.logo} />
      </Link>
      <CloseButton onClose={closeMenu} />
      <Menu closeMenu={closeMenu} />
    </div>
  );
};

export default MenuMobile;
