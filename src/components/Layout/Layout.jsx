import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

import css from './Layout.module.css';

const Layot = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layot;
