import { ICONS } from '../Constants/constants';
import css from './CamperCard.module.css';

const CamperCard = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img
          className={css.img}
          src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
          alt="camper"
        />
      </div>
      <div className={css.info}>
        <div className={css.contWrap}>
          <h3 className={css.name}>Road Bear C 23-25</h3>
          <p className={css.price}>10000.00</p>
          <button className={css.btnFavorite} type="button">
            <svg className={css.favorite}>
              <use href={ICONS.heart}></use>
            </svg>
          </button>
        </div>
        <div className={css.ratingWrap}>
          <svg className={css.star}>
            <use href={ICONS.star}></use>
          </svg>
          <div className={css.rating}>4.4</div>
          <div className={css.review}>(3 Reviews)</div>
          <svg className={css.locationIcon}>
            <use href={ICONS.cupHot}></use>
          </svg>
          <div className={css.location}>Kyiv, Ukraine</div>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
