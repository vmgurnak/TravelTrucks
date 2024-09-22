import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import FilterForm from '../FilterForm/FilterForm.jsx';
import {
  selectModalIsOpen,
  selectModalFiltersIsOpen,
} from '../../redux/modal/selectors.js';
import { changeModal } from '../../redux/modal/slice.js';

import css from './Modal.module.css';

const MainModal = () => {
  const dispatch = useDispatch();
  const modalFiltersIsOpen = useSelector(selectModalFiltersIsOpen);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const customStyles = {
    overlay: {
      zIndex: '1',
      backgroundColor: 'rgba(46, 47, 66, 0.76)',
    },
    content: {
      background: 'none',
      inset: '20px 40px',
      border: 'none',
      outline: '10px',
      padding: '0',
    },
  };
  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => dispatch(changeModal(false))}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
      // className={css.modal}
      // overlayClassName={css.overlay}
    >
      {modalFiltersIsOpen ? <FilterForm /> : null}
    </Modal>
  );
};

export default MainModal;
