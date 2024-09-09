import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('./pages/CamperDetailsPage/CamperDetailsPage')
);
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:camperID/*" element={<CamperDetailsPage />} />
          <Route path="favorites/:camperID/*" element={<CamperDetailsPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
