import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { fetchCamperRequestID } from '../../redux/campers/operations';

import css from './CamperDetailsPage.module.css';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.link], isActive && css.active);
};

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { camperID } = useParams();

  console.log(camperID);
  useEffect(() => {
    dispatch(fetchCamperRequestID(camperID));
  }, [dispatch, camperID]);

  return (
    <section className={css.camperDetailsPage}>
      <div className={css.camperInfo}>Camper Info</div>
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
    </section>
  );
};

export default CamperDetailsPage;
