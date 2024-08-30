import { Link } from 'react-router-dom';
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
            <use href={ICONS.location}></use>
          </svg>
          <div className={css.location}>Kyiv, Ukraine</div>
        </div>
        <p className={css.description}>
          Embadventures, promising comfort, style, and the freedom to explore at
          your own pace.
        </p>
        <ul className={css.equipmentList}>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.transmission}></use>
            </svg>
            <p className={css.equipmentText}>Automatic</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.engine}></use>
            </svg>
            <p className={css.equipmentText}>Petrol</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.kitchen}></use>
            </svg>
            <p className={css.equipmentText}>Kitchen</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.ac}></use>
            </svg>
            <p className={css.equipmentText}>AC</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.bathroom}></use>
            </svg>
            <p className={css.equipmentText}>Bathroom</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.tv}></use>
            </svg>
            <p className={css.equipmentText}>TV</p>
          </li>
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={ICONS.radio}></use>
            </svg>
            <p className={css.equipmentText}>Radio</p>
          </li>
        </ul>
        <Link to="catalog/323" className={css.linkCamperdetails}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;

// Для опиcу деталей використовуй наступні властивості:
// "form": "alcove", Fully Integrated, Van
// "length": "7.3m",
// "width": "2.65m",
// "height": "3.65m",
// "tank": "208l",
// "consumption": "30l/100km",

// "transmission": "automatic",
// "engine": "diesel",
// "kitchen": false,
// "AC": true,

// "bathroom": true,
// "TV": true,

// "refrigerator": false,

// "radio": true,
// "microwave": true,
// "gas": false,
// "water": true,

// Filters
// "location": "Ukraine, Kyiv",

// Vehicle equipment
// "AC": true,
// "transmission": "automatic",
// "kitchen": false,
// "TV": true,
// "bathroom": true,

// "engine": "diesel",

// Vehicle type
// "form": "alcove", Fully Integrated, Van
// 'panelTruck'; fullyIntegrated, alcove
