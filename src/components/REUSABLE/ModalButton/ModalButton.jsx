import { ICONS } from '../../Constants/constants';
import { SvgIcon } from '../../REUSABLE/SvgIcon/SvgIcon';

import css from './ModalButton.module.css';

const ModalButton = () => {
  return (
    <button className={css.btn}>
      <SvgIcon addClass={css.icon} icon={ICONS.formFullyIntegrated} />
      Filters
    </button>
  );
};

export default ModalButton;
