import { useDispatch } from 'react-redux';

import { ICONS } from '../../Constants/constants';
import { SvgIcon } from '../../REUSABLE/SvgIcon/SvgIcon';
import { changeFiltersModal } from '../../../redux/modal/slice';

import css from './ModalButton.module.css';

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={css.btn}
      onClick={() => {
        dispatch(changeFiltersModal(true));
      }}
    >
      <SvgIcon addClass={css.icon} icon={ICONS.formFullyIntegrated} />
      Filters
    </button>
  );
};

export default ModalButton;
