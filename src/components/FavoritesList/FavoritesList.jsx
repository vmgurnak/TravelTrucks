import { useSelector } from 'react-redux';
import { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';

import { selectFilteredFavorites } from '../../redux/favorites/selectors.js';

import css from './FavoritesList.module.css';

const FavoritesList = () => {
  const [items, setItems] = useState(4);

  const favoritesCampers = useSelector(selectFilteredFavorites);

  const showCampers = favoritesCampers.slice(0, items);
  const quantityCampers = favoritesCampers.length;

  const showMore = () => setItems(items + 4);
  console.log(favoritesCampers);

  return (
    <div className={css.containerFavoritesList}>
      {favoritesCampers.length === 0 && (
        <p className={css.textError}>No favotites campers found!</p>
      )}

      {Array.isArray(favoritesCampers) && favoritesCampers.length > 0 && (
        <ul>
          {showCampers.map(camper => (
            <li key={camper.id} className={css.item}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      )}
      {quantityCampers > items && <LoadMoreBtn showMore={showMore} />}
    </div>
  );
};

export default FavoritesList;
