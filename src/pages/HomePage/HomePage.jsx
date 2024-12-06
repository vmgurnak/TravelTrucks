import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/REUSABLE/DocumentTitle.jsx';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>TravelTrucks</DocumentTitle>
      <section className={css.homePage}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.link} to="/catalog">
          View Now
        </Link>
      </section>
    </>
  );
};

export default HomePage;
