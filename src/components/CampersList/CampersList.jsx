import { useSelector } from 'react-redux';
import { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import CamperCard from '../CamperCard/CamperCard.jsx';

import { selectFilteredCampers } from '../../redux/campers/selectors.js';

import css from './CampersList.module.css';

const CampersList = () => {
  const [items, setItems] = useState(4);

  const filteredCampers = useSelector(selectFilteredCampers);
  const showCampers = filteredCampers.slice(0, items);
  const quantityCampers = filteredCampers.length;

  const showMore = () => setItems(items + 4);
  console.log(filteredCampers);

  return (
    <div className={css.container}>
      <ul>
        {showCampers.map(camper => (
          <li key={camper.id} className={css.item}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {quantityCampers > items && <LoadMoreBtn showMore={showMore} />}
    </div>
  );
};

export default CampersList;
