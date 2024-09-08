import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { filters } from '../../redux/filters/slice';

import FavoritesList from '../../components/FavoritesList/FavoritesList';
import FilterForm from '../../components/FilterForm/FilterForm';
import { INITIAL_FORM_DATA } from '../../components/Constants/constants';

import css from './FavoritesPage.module.css';

const FavotitesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filters(INITIAL_FORM_DATA));
  }, [dispatch]);

  return (
    <section className={css.favotitesPage}>
      <FilterForm />
      <FavoritesList />
    </section>
  );
};

export default FavotitesPage;
