import { ICONS } from '../Constants/constants';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';

import css from './MenuMobileBtn.module.css';

const MenuMobileBtn = ({ openMenu }) => {
  return (
    <button className={css.btnMenu} onClick={openMenu}>
      <SvgIcon addClass={css.iconMenu} icon={ICONS.menuBurger} />
    </button>
  );
};

export default MenuMobileBtn;
