import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FilterForm from '../../components/FilterForm/FilterForm';
import CampersList from '../../components/CampersList/CampersList';

import css from './CatalogPage.module.css';
import { fetchCampersRequest } from '../../redux/campers/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersRequest());
  }, [dispatch]);

  return (
    <section className={css.catalogPage}>
      <FilterForm />
      <CampersList />
    </section>
  );
};

export default CatalogPage;
