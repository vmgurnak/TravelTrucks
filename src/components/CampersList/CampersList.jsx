import { useSelector } from 'react-redux';

import CamperCard from '../CamperCard/CamperCard.jsx';
import { selectCampers } from '../../redux/campers/selectors.js';

import css from './CampersList.module.css';

const CampersList = () => {
  const campers = useSelector(selectCampers);
  console.log(campers);

  return (
    <div className={css.container}>
      <ul>
        {campers.map(camper => (
          <li key={camper.id} className={css.item}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      <button className={css.btnLoadMore} type="button">
        Load more
      </button>
    </div>
  );
};

export default CampersList;
