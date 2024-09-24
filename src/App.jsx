import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import MainModal from './components/Modal/Modal.jsx';
import { selectModalIsOpen } from './redux/modal/selectors.js';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('./pages/CamperDetailsPage/CamperDetailsPage')
);
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const App = () => {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const { width } = useWindowSize();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="catalog/:camperID/*" element={<CamperDetailsPage />} />
            <Route
              path="favorites/:camperID/*"
              element={<CamperDetailsPage />}
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
      {modalIsOpen && width < 1440 ? <MainModal /> : null}
    </>
  );
};

export default App;
