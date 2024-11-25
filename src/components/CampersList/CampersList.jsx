import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

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
  const scrollRef = useRef();
  const heightItem =
    scrollRef.current && scrollRef.current.getBoundingClientRect().height;
  console.log(heightItem);

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filteredCampers = useSelector(selectFilteredCampers);

  const showCampers = filteredCampers.slice(0, items);
  const quantityCampers = filteredCampers.length;

  useEffect(() => {
    window.scrollBy({
      top: items > 4 ? (heightItem + 20) * 2 : 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [items, heightItem]);

  const showMore = () => {
    setItems(items + 4);
  };

  return (
    <div className={css.containerCampersList}>
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
            <li key={camper.id} className={css.item} ref={scrollRef}>
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
