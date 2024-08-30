import FilterForm from '../../components/FilterForm/FilterForm';
import CampersList from '../../components/CampersList/CampersList';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.catalogPage}>
      <FilterForm />
      <CampersList />
    </section>
  );
};

export default CatalogPage;
