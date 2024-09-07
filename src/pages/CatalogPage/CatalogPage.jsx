import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterForm from '../../components/FilterForm/FilterForm';
import CampersList from '../../components/CampersList/CampersList';

import { selectFilteredCampers } from '../../redux/campers/selectors';
import { fetchCampersRequest } from '../../redux/campers/operations';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);

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
