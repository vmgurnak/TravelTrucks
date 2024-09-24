import clsx from 'clsx';
import { ICONS } from '../../Constants/constants.js';
import { SvgIcon } from '../SvgIcon/SvgIcon.jsx';

import css from './CloseButton.module.css';

const CloseButton = ({ onClose, addClass }) => {
  return (
    <button className={clsx(css.btnClose, addClass)} onClick={onClose}>
      <SvgIcon addClass={css.iconBtnClose} icon={ICONS.menuClose} />
    </button>
  );
};

export default CloseButton;
