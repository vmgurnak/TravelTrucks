import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';
import clsx from 'clsx';

import FilterForm from '../../components/FilterForm/FilterForm';
import CampersList from '../../components/CampersList/CampersList';

import { fetchCampersRequest } from '../../redux/campers/operations';
import { filters } from '../../redux/filters/slice';
import { INITIAL_FORM_DATA } from '../../components/Constants/constants';
import ModalButton from '../../components/REUSABLE/ModalButton/ModalButton';
import { selectModalIsOpen } from '../../redux/modal/selectors';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersRequest());
    dispatch(filters(INITIAL_FORM_DATA));
  }, [dispatch]);

  return (
    <section
      className={clsx(css.catalogPage, { [css.notScroll]: modalIsOpen })}
    >
      {width < 1440 ? (
        <>
          <ModalButton />
          <CampersList />
        </>
      ) : (
        <>
          <FilterForm />
          <CampersList />
        </>
      )}
    </section>
  );
};

export default CatalogPage;
