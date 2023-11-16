import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  const isLoading = true; 

  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      )}
    </Suspense>
  );
};


