import CamperCard from '../CamperCard/CamperCard.jsx';

import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <div className={css.container}>
      <ul>
        <li className={css.item}>
          <CamperCard />
        </li>
        <li className={css.item}>
          <CamperCard />
        </li>
        <li className={css.item}>
          <CamperCard />
        </li>
        <li className={css.item}>
          <CamperCard />
        </li>
      </ul>

      <button className={css.btnLoadMore} type="button">
        Load more
      </button>
    </div>
  );
};

export default CampersList;
