import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import FilterForm from '../FilterForm/FilterForm.jsx';
import {
  selectModalIsOpen,
  selectModalFiltersIsOpen,
} from '../../redux/modal/selectors.js';
import { changeModal } from '../../redux/modal/slice.js';

import css from './Modal.module.css';
import { useEffect, useState } from 'react';

const MainModal = () => {
  const [beforeClose, setBeforeClose] = useState(false);
  const [afterOpen, setAfterOpen] = useState(false);
  const dispatch = useDispatch();
  const modalFiltersIsOpen = useSelector(selectModalFiltersIsOpen);
  const modalIsOpen = useSelector(selectModalIsOpen);

  useEffect(() => {
    if (!modalIsOpen) return;
    setAfterOpen(true);
  }, [modalIsOpen]);

  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        setBeforeClose(!beforeClose);
        setTimeout(() => {
          dispatch(changeModal(false));
        }, 500);
      }}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={clsx(css.modal)}
      overlayClassName={clsx(css.modalOverlay, {
        [css.afterOpen]: afterOpen,
        [css.beforeClose]: beforeClose,
      })}
    >
      {modalFiltersIsOpen ? <FilterForm /> : null}
    </Modal>
  );
};

export default MainModal;
