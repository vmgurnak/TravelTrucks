import { useSelector } from 'react-redux';
import { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';

import {
  selectError,
  selectLoading,
  selectFilteredCampers,
} from '../../redux/campers/selectors.js';

import css from './CampersList.module.css';

const CampersList = () => {
  const [items, setItems] = useState(4);

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filteredCampers = useSelector(selectFilteredCampers);

  const showCampers = filteredCampers.slice(0, items);
  const quantityCampers = filteredCampers.length;

  const showMore = () => setItems(items + 4);
  console.log(filteredCampers);

  return (
    <div className={css.container}>
      {isError && (
        <p className={css.textError}>
          Sorry, the service is not available. Please try again later.
        </p>
      )}
      {!isLoading && !filteredCampers.length > 0 && (
        <p className={css.textError}>
          No campers found, please repeat your request!
        </p>
      )}
      {isLoading && <p className={css.textLoading}>Loading...</p>}

      {Array.isArray(filteredCampers) && filteredCampers.length > 0 && (
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

export default CampersList;
