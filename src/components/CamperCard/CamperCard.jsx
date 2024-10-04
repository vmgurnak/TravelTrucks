import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';

import { selectFavorites } from '../../redux/favorites/selectors';
import { addFavorites } from '../../redux/favorites/slice';
import { ICONS } from '../Constants/constants';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';

import css from './CamperCard.module.css';

const toEuro = new Intl.NumberFormat('en-EU', {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
});

const CamperCard = ({ camper }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(fav => fav.id === camper.id);

  return (
    <div className={css.containerCamperCard}>
      <div className={css.imgContainer}>
        <img
          className={css.img}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
      </div>
      <div className={css.info}>
        <div className={css.contWrap}>
          <h3 className={css.name}>{camper.name}</h3>
          <p className={css.price}>{toEuro.format(camper.price)}</p>
          <button
            className={css.btnFavorite}
            type="button"
            onClick={() => dispatch(addFavorites(camper))}
          >
            {isFavorite ? (
              <SvgIcon addClass={css.favorite} icon={ICONS.heartPressed} />
            ) : (
              <SvgIcon addClass={css.favorite} icon={ICONS.heart} />
            )}
          </button>
        </div>
        <div className={css.ratingWrap}>
          <SvgIcon addClass={css.star} icon={ICONS.starPressed} />
          <p className={css.ratingReview}>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <SvgIcon addClass={css.locationIcon} icon={ICONS.location} />
          <div className={css.location}>{camper.location}</div>
        </div>
        {width >= 768 && (
          <p className={css.description}>{camper.description}</p>
        )}
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.transmission} />
            <p className={css.equipmentText}>{camper.transmission}</p>
          </li>
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.engine} />
            <p className={css.equipmentText}>{camper.engine}</p>
          </li>
          {camper.kitchen && (
            <li className={css.equipmentItem}>
              <SvgIcon addClass={css.equipmentIcon} icon={ICONS.kitchen} />
              <p className={css.equipmentText}>Kitchen</p>
            </li>
          )}
          {camper.AC && (
            <li className={css.equipmentItem}>
              <SvgIcon addClass={css.equipmentIcon} icon={ICONS.ac} />
              <p className={css.equipmentText}>AC</p>
            </li>
          )}
          {camper.bathroom && (
            <li className={css.equipmentItem}>
              <SvgIcon addClass={css.equipmentIcon} icon={ICONS.bathroom} />
              <p className={css.equipmentText}>Bathroom</p>
            </li>
          )}
          {camper.TV && (
            <li className={css.equipmentItem}>
              <SvgIcon addClass={css.equipmentIcon} icon={ICONS.tv} />
              <p className={css.equipmentText}>TV</p>
            </li>
          )}
          {camper.radio && (
            <li className={css.equipmentItem}>
              <SvgIcon addClass={css.equipmentIcon} icon={ICONS.radio} />
              <p className={css.equipmentText}>Radio</p>
            </li>
          )}
        </ul>
        <Link to={`${camper.id}/features`} className={css.linkCamperdetails}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
