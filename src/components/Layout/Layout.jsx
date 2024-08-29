import Header from '../Header/Header';

import css from './Layout.module.css';

const Layot = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>{children}</main>
    </div>
  );
};

export default Layot;
