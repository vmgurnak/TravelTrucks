import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import Menu from '../Menu/Menu.jsx';
import MenuMobileBtn from '../MenuMobileBtn/MenuMobileBtn.jsx';
import { ICONS } from '../Constants/constants.js';

import css from './Header.module.css';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon.jsx';
import MenuMobile from '../MenuMobile/MenuMobile.jsx';
import { useState } from 'react';

const Header = () => {
  const { width } = useWindowSize();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className={css.header}>
      <Link className={css.logoLink} to="/">
        <SvgIcon addClass={css.logo} icon={ICONS.logo} />
      </Link>
      {width < 768 ? (
        <>
          <MenuMobile closeMenu={closeMenu} isOpenMenu={isOpenMenu} />
          <MenuMobileBtn openMenu={openMenu} />
        </>
      ) : (
        <Menu />
      )}
    </header>
  );
};

export default Header;
