import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use';

import FilterForm from '../../components/FilterForm/FilterForm';
import CampersList from '../../components/CampersList/CampersList';

import { fetchCampersRequest } from '../../redux/campers/operations';
import { filters } from '../../redux/filters/slice';
import { INITIAL_FORM_DATA } from '../../components/Constants/constants';

import css from './CatalogPage.module.css';
import ModalButton from '../../components/REUSABLE/ModalButton/ModalButton';

const CatalogPage = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersRequest());
    dispatch(filters(INITIAL_FORM_DATA));
  }, [dispatch]);

  return (
    <section className={css.catalogPage}>
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
