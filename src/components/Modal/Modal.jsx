import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import clsx from 'clsx';

import FilterForm from '../FilterForm/FilterForm.jsx';
import {
  selectModalIsOpen,
  selectModalFiltersIsOpen,
  selectBeforeClose,
} from '../../redux/modal/selectors.js';
import { changeModal, changeBeforeClose } from '../../redux/modal/slice.js';
import CloseButton from '../REUSABLE/CloseButton/CloseButton.jsx';

import css from './Modal.module.css';

const MainModal = () => {
  const [afterOpen, setAfterOpen] = useState(false);
  const dispatch = useDispatch();
  const modalFiltersIsOpen = useSelector(selectModalFiltersIsOpen);
  const modalIsOpen = useSelector(selectModalIsOpen);
  const beforeClose = useSelector(selectBeforeClose);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!modalIsOpen) return;
    // dispatch(changeAfterOpen(true));
    setAfterOpen(true);
  }, [modalIsOpen, dispatch]);

  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={modalIsOpen}
      onRequestClose={() => {
        dispatch(changeBeforeClose(true));
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
      <CloseButton
        onClose={() => {
          dispatch(changeBeforeClose(true));
          setTimeout(() => {
            dispatch(changeModal(false));
          }, 500);
        }}
        addClass={css.closeBtnModal}
      />
      {modalFiltersIsOpen && width < 1440 ? <FilterForm /> : null}
    </Modal>
  );
};

export default MainModal;
