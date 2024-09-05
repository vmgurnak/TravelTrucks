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

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
