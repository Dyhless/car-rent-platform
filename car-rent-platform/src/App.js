import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage/Catalog'));
const Favorites = lazy(() => import('./pages/FavoritesPage/Favorites'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};


