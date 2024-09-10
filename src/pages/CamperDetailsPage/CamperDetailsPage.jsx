import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { fetchCamperRequestID } from '../../redux/campers/operations';

import css from './CamperDetailsPage.module.css';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import {
  selectCamper,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import clsx from 'clsx';
import { SvgIcon } from '../../components/REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../../components/Constants/constants';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};

const toEuro = new Intl.NumberFormat('en-EU', {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
});

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { camperID } = useParams();
  const camper = useSelector(selectCamper);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperRequestID(camperID));
  }, [dispatch, camperID]);

  console.log(camper);

  return (
    <section className={css.camperDetailsPage}>
      {isError && (
        <p className={css.textError}>
          Sorry, the service is not available. Please try again later.
        </p>
      )}
      {!isLoading && !camper > 0 && (
        <p className={css.textError}>
          No camper found, please repeat your request!
        </p>
      )}
      {isLoading && <p className={css.textLoading}>Loading...</p>}
      {camper && (
        <>
          <div className={css.camperInfo}>
            <h3 className={css.name}>{camper.name}</h3>
            <div className={css.ratingWrap}>
              <SvgIcon addClass={css.star} icon={ICONS.star} />
              <p className={css.ratingReview}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
              <SvgIcon addClass={css.locationIcon} icon={ICONS.location} />
              <div className={css.location}>{camper.location}</div>
            </div>
            <p className={css.price}>{toEuro.format(camper.price)}</p>
            <ul className={css.camperGallery}>
              {camper.gallery.map((item, index) => (
                <li className={css.galleryItem} key={index + 1}>
                  <img className={css.img} src={item.thumb} alt={camper.name} />
                </li>
              ))}
            </ul>
            <p className={css.description}>{camper.description}</p>
          </div>
          <ul className={css.camperDetailsLinks}>
            <li>
              <NavLink className={buildLinkClass} to="features">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink className={buildLinkClass} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <div className={css.camperDetails}>
            <div className={css.camperDetailsInfo}>
              <Routes>
                <Route path="features" element={<CamperFeatures />} />
                <Route path="reviews" element={<CamperReviews />} />
              </Routes>
            </div>
            <div className={css.camperBookForm}></div>
          </div>
        </>
      )}
    </section>
  );
};

export default CamperDetailsPage;
