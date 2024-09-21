import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from 'react-use';

import { filters } from '../../redux/filters/slice';

import FavoritesList from '../../components/FavoritesList/FavoritesList';
import FilterForm from '../../components/FilterForm/FilterForm';
import { INITIAL_FORM_DATA } from '../../components/Constants/constants';

import css from './FavoritesPage.module.css';
import ModalButton from '../../components/REUSABLE/ModalButton/ModalButton.jsx';

const FavotitesPage = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filters(INITIAL_FORM_DATA));
  }, [dispatch]);

  return (
    <section className={css.favotitesPage}>
      {width < 1440 ? (
        <>
          <ModalButton />
          <FavoritesList />
        </>
      ) : (
        <>
          <FilterForm />
          <FavoritesList />
        </>
      )}
    </section>
  );
};

export default FavotitesPage;
